'use client';
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="py-20">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full p-1"
    >
      <Tab setPosition={setPosition} href='/'>Colin Cason</Tab>
      <Tab setPosition={setPosition} href='/about'>About</Tab>
      <Tab setPosition={setPosition} href='/projects'>Projects</Tab>
      <Tab setPosition={setPosition} href='/contributions'>Contributions</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  href: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      href={href}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 uppercase text-teal-300 mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 rounded-full bg-zinc-700 md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};