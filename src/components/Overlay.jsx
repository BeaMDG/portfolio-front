import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import ProyectosTable from './ProyectosTable';

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);
  const [showApiProyectos, setShowApiProyectos] = useState(false);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  const handleMostrarProyectos = () => {
    setShowApiProyectos(true);
  };

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Beatriz Mendes
          </h1>
          <p className="text-gray-500">
            *Desarrolladora web full-stack
            <br />*Documentalista
            <br />[mdg.bea@gmail.com]

          </p>
          <ul className="leading-9">
            <li> 💻Front-end</li>
            <li> 🔐Back-end</li>
            <li> 🗄Bases de datos</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">Skills 🔥</h1>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>html, css, sass</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Figma</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>php</li>
            <li>XAMPP</li>
            <li>Symfony</li>
            <li>MySQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
        <div>
      <h1></h1>
      <ProyectosTable />
    </div>
        </Section>
      </div>
    </Scroll>
  );
}; 