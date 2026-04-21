"use client"
import ProfileCard from "./ProfileCard"


export default function ProfileImage() {
  return (
    <ProfileCard
      name="Orlando Ferazzani"
      title="FullStack dev."
      handle="orli"
      status="Online"
      contactText="Contact Me"
      avatarUrl="/IMG_7993.webp"
      className=""
      showUserInfo
      enableTilt={true}
      enableMobileTilt
      onContactClick={() => window.location.href = 'https://www.linkedin.com/in/orlando-v-m-ferazzani'}
      behindGlowColor="rgba(125, 190, 255, 0.67)"
      behindGlowEnabled
      innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
    />
  )
}