import Image from "next/image";
import { pub,priv } from "../../public/services.js"
import Link from "next/link.js";
import { title } from "process";

const bodyStyle = "";
const PanelContainer = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-5";
const Panel = "grid grid-cols-2 p-2 bg-white rounded-xl overflow-hidden shadow-lg shadow-cyan-400/20 ring-2 ring-cyan-400h-48 bg-gradient-to-r from-indigo-500 to-purple-600";
const ButtonContainer = "p-1 m-5 col-start-1";
const ButtonStyle = "p-2 rounded-lg outline-white bg-black text-center m-3";

function ListServices({ title, service}){
  const services = service.map( serv => 
    <div key={serv.title} className={Panel}>
      <div className="px-3 text-left text-lg font-bold col-start-1 text-center font-bold">{serv.title}</div>
      <div key={serv.title + " buttons"} className={ButtonContainer}>
        <Buttons links={serv.links} title={title}/>
      </div>
      <div className="p-2 col-start-2">{serv.description}</div>
    </div>
  );
  return <div key = {title} className={PanelContainer}>{services}</div>;
}

function Buttons({links,title}){
  const buttons = links.map( link => 
    <div key={title + " " + link.title} className={ButtonStyle}>
      <Link href={link.link}>{link.title}</Link>
    </div>
  );
  return buttons;
}

function OSSetup(){
  return <div></div>
}

export default function Home() {
  return (
   <div className={bodyStyle}>
    <title>moooo.dev</title>

    {/* Header text/intro */}
    <div className="text-center text-5xl font-black p-5">
      moooo.dev
    </div>
    <div className="text-center text-3xl font-bold p-5">
      Welcome to my homelab! Here you'll find some public services and personal projects I host from home.
    </div>
    <div>
      {/* Public services */}
      <div className="font-bold text-center text-2xl p-3">Public Services</div>
      <div>
        <ListServices title="Public Services" service={pub}/>
      </div>
      {/* Private services */}
      <div className="font-bold text-center text-2xl p-3">Private Services</div>
      <div>
        <ListServices title="Private Services" service={priv}/>
      </div>
      {/* Main OS and package setup */}
      <div>Currently used OS and must have packages</div>
        <OSSetup/>
      </div>
    </div>
    
  );
}
