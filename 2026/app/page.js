"use client";
import { useEffect } from "react";
import useLenis from "@/hooks/useLenis";
import useGsapScrollTrigger from "@/hooks/useGsapScrollTrigger";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ActOpen from "@/components/sections/ActOpen";
import ActOrigin from "@/components/sections/ActOrigin";
import ActWork from "@/components/sections/ActWork";
import ActCraft from "@/components/sections/ActCraft";
import ActMilestones from "@/components/sections/ActMilestones";
import ActSignal from "@/components/sections/ActSignal";
import CertificateModal from "@/components/CertificateModal";

export default function Home() {
  useLenis();
  useGsapScrollTrigger();

  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <main>
        <ActOpen />
        <ActOrigin />
        <ActWork />
        <ActCraft />
        <ActMilestones />
        <ActSignal />
      </main>
      <CertificateModal />
    </>
  );
}