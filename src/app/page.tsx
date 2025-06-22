import Link from "next/link";
import "@radix-ui/themes/styles.css"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-gray-950">
      <main className="flex flex-col">

        <div className="flex flex-col">
          <div className="text-6xl content-center my-10 mx-auto font-bold text-gradient animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-neutral-850 to-neutral-50">moooo.dev</div>
          <div className="justify-center my-10 mx-auto text-2xl font text-gray-400 leading-relaxed">Welcome to my homelab! Here you&apos;ll find some public services and personal projects I host from home.</div>
        </div>
        

{/* Start public services section */}
        <div className="text-3xl mx-auto">Public Servies</div>
        <div className="grid grid-cols-3 gap-10 justify-between container mx-auto px-6 py-4">
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/minecraft.jpeg)]
          bg-center
          ">
            <h3 className="text-2xl mb-5 z-1 z-2 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Minecraft</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Vanilla Fabirc Minecraft server with cross platform compatibility via Geyser.
            </p>
            <div className="border-gray-600 hover:border-white transition-all duration-300 my-5">
                <Link href={"https://moooo.dev/mods/minecraft"}>
                <button className="
                  border border-input bg-background hover:bg-accent hover:text-accent-foreground
                  h-9 rounded-md px-3
                  border-gray-600 hover:border-white transition-all duration-300
                  ">Mods</button>
                </Link>
                <Link href={"https://map.moooo.dev"}>
                <button className="
                  border border-input bg-background hover:bg-accent hover:text-accent-foreground
                  h-9 rounded-md px-3
                  border-gray-600 hover:border-white transition-all duration-300
                  ">BlueMap</button>
                </Link>
                <Link href={""}>
                <button className="
                  border border-input bg-background hover:bg-accent hover:text-accent-foreground
                  h-9 rounded-md px-3
                  border-gray-600 hover:border-white transition-all duration-300
                  ">games.moooo.dev</button>
                </Link>
              </div>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/factorio.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Factorio</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Heavily modded Factorio space age server. Primarily features Krastorio 2.
            </p>
            <Link href={"https://moooo.dev/mods/factorio"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Mods</button>
            </Link>
            <Link href={"steam://run/427520//--mp-connect%20games.moooo.dev:34197/"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">games.moooo.dev</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/synctube.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">SyncTube</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Instance of SyncTube. Watch videos and listen to music with your friends. No account required. 
            </p>
            <Link href={"https://synctube.moooo.dev"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">SyncTube</button>
            </Link>
            <Link href={"https://github.com/RblSb/SyncTube"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
        </div>

{/* Start private services section */}
        <div className="text-3xl mx-auto">Private Servies</div>
        <div className="flex justify-between container mx-auto px-6 py-4 grid grid-cols-3 gap-10">
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/open-webui.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Open-Webui</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Open WebUI is an extensible, feature-rich, and user-friendly self-hosted AI platform designed to operate entirely offline.
            </p>
            <Link href={"https://github.com/open-webui/open-webui"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/pihole.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">PiHole</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              The Pi-hole® is a DNS sinkhole that protects your devices from unwanted content without installing any client-side software.
            </p>
            <Link href={"https://github.com/pi-hole/pi-hole"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/searxng.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">SearXNG</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Privacy-respecting, hackable metasearch engine
            </p>
            <Link href={"https://github.com/searxng/searxng"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/nginxproxymanager.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Nginx Proxy Manager</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Reverse proxy with support for SSL using Nginx under the hood.
            </p>
            <Link href={"https://github.com/NginxProxyManager/nginx-proxy-manager"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/qbittorrent.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">qBittorent-Nox</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Bittorrent capable of running on a headless server with a remote webui packaged in a ready to deploy Docker container for downloading LinuxISOs.
            </p>
            <Link href={"https://github.com/qbittorrent/qBittorrent"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/invidious.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Invidious</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              An open source alternative front-end to YouTube
            </p>
            <Link href={"https://github.com/iv-org/invidious"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/plex.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Plex</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Plex is a free app that lets you discover and watch content from various streaming services, your personal media, and live TV.
            </p>
            <Link href={"https://plex.tv"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">plex.tv</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/redlib.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Redlib</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              An alternative private front-end to Reddit, with its origins in Libreddit.
            </p>
            <Link href={"https://github.com/redlib-org/redlib"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/tailscale.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Tailscale</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Tailscale is a zero configuration VPN that doesn&apos;t go through the public internet.
            </p>
            <Link href={"https://tailscale.com/"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">tailscale.com</button>
            </Link>
          </div>
          <div className="
          bg-gray-900/50
          p-8 rounded-2xl
          border border-gray-800
          hover:border-gray-600
          transition-all
          duration-300
          hover:transform
          hover:scale-105
          bg-[url(/glance.png)]
          bg-center
          bg-cover
          ">
            <h3 className="text-2xl mb-5 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">Glance</h3>
            <p className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]">
              Homelab dashboard. &quot;What if you could see everything at a... Glance&quot;
            </p>
            <Link href={"https://github.com/glanceapp/glance"}>
              <button className="
              border border-input bg-background hover:bg-accent hover:text-accent-foreground
              h-9 rounded-md px-3
              border-gray-600 hover:border-white transition-all duration-300 my-5
              ">Github</button>
            </Link>
          </div>
        </div>


      <footer>moooo.dev</footer>
        
      </main>
    </div>
  );
}

