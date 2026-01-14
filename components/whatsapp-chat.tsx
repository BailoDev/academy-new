import Image from "next/image"
import Link from "next/link"

export default function WhatsAppChat() {
  return (
    <Link
      href="https://wa.me/message/GCQVLCN4PKJNN1"
      target="_blank"
      className="fixed bottom-5 right-5 md:bottom-[10px] md:right-[3px] bg-[#25d366] rounded-full w-[45px] h-[45px] md:w-[50px] md:h-[50px] flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.2)] z-[1000] hover:bg-[#22bb5b]"
      title="Chat with us on WhatsApp"
    >
      <Image
        src="/whatsApp.webp"
        alt="Whatsapp-logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    </Link>
  )
}
