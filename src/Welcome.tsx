import React from "react";
import { useParams, Navigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import ProjectsSection from "./components/ProjectSection";
import CertificationsSection from "./components/Certification";
import NavigationBar from "./components/Navigator";
import GlobalStars from "./components/GlobalStarts";

const ROLE_MAP = {
  DesarrolladorFS: "fullstack",
  DesarrolladorFE: "frontend",
  DesarrolladorBE: "backend",
} as const;

export type ActiveRole = (typeof ROLE_MAP)[keyof typeof ROLE_MAP];

export default function Welcome() {
  const { role } = useParams<{ role: string }>();

  const currentRoleKey = role as keyof typeof ROLE_MAP;
  if (!role || !ROLE_MAP[currentRoleKey]) {
    return <Navigate to="/DesarrolladorFS" replace />;
  }

  const activeRole: ActiveRole = ROLE_MAP[currentRoleKey];

  return (
    <>
      <NavigationBar />

      <GlobalStars />

      <HeroSection activeRole={activeRole} />

      <AboutMe activeRole={activeRole} />
      <TechStack activeRole={activeRole} />
      <ProjectsSection activeRole={activeRole} />

      <CertificationsSection />
    </>
  );
}
