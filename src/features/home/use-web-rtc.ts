import { useRef, useState } from "react"

export const useWebRTC = () => {
  const localVideoRef = useRef<HTMLVideoElement | null>(null)
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null)
  const [mediaGranted, setMediaGranted] = useState(false)

  const peerConnection = useRef<RTCPeerConnection | null>(null)
  const localStream = useRef<MediaStream | null>(null)

  const requestMediaPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }

      localStream.current = stream
      setMediaGranted(true)
      console.log("Media permissions granted.")
    } catch (error) {
      console.error("Error accessing media devices:", error)
      alert("Please allow camera and microphone access to proceed.")
      setMediaGranted(false)
    }
  }

  const startLocalStream = async () => {
    if (!mediaGranted) {
      await requestMediaPermissions()
    }
  }

  const createOffer = async () => {
    if (!peerConnection.current) {
      peerConnection.current = new RTCPeerConnection()
    }

    localStream.current?.getTracks().forEach(track => {
      peerConnection.current?.addTrack(track, localStream.current!)
    })

    const offer = await peerConnection.current.createOffer()
    await peerConnection.current.setLocalDescription(offer)
    return offer.sdp
  }

  const createAnswer = async (offer: string) => {
    if (!peerConnection.current) {
      peerConnection.current = new RTCPeerConnection()
    }

    await peerConnection.current.setRemoteDescription({
      type: "offer",
      sdp: offer,
    })

    localStream.current?.getTracks().forEach(track => {
      peerConnection.current?.addTrack(track, localStream.current!)
    })

    const answer = await peerConnection.current.createAnswer()
    await peerConnection.current.setLocalDescription(answer)

    return answer.sdp
  }

  const setRemoteAnswer = async (answer: string) => {
    if (!peerConnection.current) return

    await peerConnection.current.setRemoteDescription({
      type: "answer",
      sdp: answer,
    })
  }

  return {
    localVideoRef,
    remoteVideoRef,
    startLocalStream,
    createOffer,
    createAnswer,
    setRemoteAnswer,
    requestMediaPermissions,
  }
}
