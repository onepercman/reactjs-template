export class Socket {
  private url: string
  private heartbeat: number
  private heartbeatId: any
  private handleMap: Record<string, any>
  private connected: boolean
  private socket: WebSocket

  constructor(url: string, heartbeat: number = 0) {
    this.url = url
    this.heartbeat = heartbeat
    this.handleMap = {}
    this.connected = false

    const websocket = new WebSocket(this.url)
    websocket.binaryType = "arraybuffer"
    websocket.onclose = (e: CloseEvent) => this._onClose(e)
    websocket.onmessage = (e: MessageEvent) => this._onMessage(e)
    websocket.onerror = (e: Event) => this._onError(e)
    websocket.onopen = (e: Event) => this._onOpen(e)
    this.socket = websocket
  }

  public onMessage(subName: string, cb: (data: any) => void): void {
    if (!this.handleMap[subName]) {
      this.handleMap[subName] = cb
    }
  }

  public send(data: any) {
    this.socket.send(JSON.stringify(data))
  }

  public isConnected(): boolean {
    return this.connected
  }

  private handleMessage(subName: string, data: any) {
    const cb = this.handleMap[subName]
    cb && cb(data)
  }

  private _onOpen(e: Event): void {
    console.log("🛜 open", e)
    this.connected = true
    this.initHeartbeat()
    this.handleMessage("open", {})
  }

  private _onClose(e: CloseEvent): void {
    console.log("🛜 close", e)
    this.closeHeartbeat()
    this.connected = false
  }

  private _onMessage(msg: MessageEvent): void {
    try {
      const data = JSON.parse(msg.data)
      this.handleMessage("message", data)
    } catch (e) {
      console.error("parse message error: ", e)
    }
  }

  private _onError(e: Event): void {
    this.closeHeartbeat()
    this.connected = false
    console.error("websocket on error", e)
  }

  private initHeartbeat() {
    const heartbeat = this.heartbeat
    if (heartbeat && !this.heartbeatId) {
      this.heartbeatId = setInterval(() => {}, heartbeat * 1000)
    }
  }

  private closeHeartbeat() {
    const heartbeatId = this.heartbeatId
    heartbeatId && clearInterval(heartbeatId)
  }
}
