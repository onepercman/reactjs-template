import { useWebRTC } from "./use-web-rtc"

export default function Home() {
  const {
    localVideoRef,
    remoteVideoRef,
    requestMediaPermissions,
    startLocalStream,
    createOffer,
    createAnswer,
    setRemoteAnswer,
  } = useWebRTC()

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-900 py-8 text-white">
      <h1 className="mb-8 text-3xl font-bold">WebRTC Video Call</h1>

      <div className="mb-8 flex flex-wrap gap-4">
        <button
          onClick={requestMediaPermissions}
          className="rounded bg-gray-600 px-4 py-2 shadow hover:bg-gray-700"
        >
          Request Permissions
        </button>
        <button
          onClick={startLocalStream}
          className="rounded bg-blue-600 px-4 py-2 shadow hover:bg-blue-700"
        >
          Start Local Stream
        </button>
        <button
          onClick={async () => {
            const offer = await createOffer()
            console.log(offer)
          }}
          className="rounded bg-green-600 px-4 py-2 shadow hover:bg-green-700"
        >
          Create Offer
        </button>
        <button
          onClick={async () => {
            const offerString = prompt("Enter Offer:") || ""
            const answer = await createAnswer(offerString)
            console.log(answer)
          }}
          className="rounded bg-yellow-600 px-4 py-2 shadow hover:bg-yellow-700"
        >
          Create Answer
        </button>
        <button
          onClick={() => {
            const answerString = prompt("Enter Answer:") || ""
            setRemoteAnswer(answerString)
          }}
          className="rounded bg-red-600 px-4 py-2 shadow hover:bg-red-700"
        >
          Set Remote Answer
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-xl font-semibold">Local Video</h3>
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="h-64 w-full rounded bg-gray-800 shadow-lg"
          ></video>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-xl font-semibold">Remote Video</h3>
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="h-64 w-full rounded bg-gray-800 shadow-lg"
          ></video>
        </div>
      </div>
    </div>
  )
}
