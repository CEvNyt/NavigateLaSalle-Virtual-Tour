import { Viewer } from "@photo-sphere-viewer/core";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";
  import "../css/u_virtual_tour.css";
  import "../css/u_modals.css";
  import "../css/u_sidebar.css";

const baseUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";

/* ===================== 
    Basic Viewer
   ===================== */

export const viewer = new Viewer({
  container: document.querySelector("#viewer"),
  loadingImg: "./Logos/DLSUD logo.gif",
  // ✅ SPEED IMPROVEMENTS
  moveSpeed: 2.0, // Increase speed to match faster interactions
  moveInertia: true, // Keep moving slightly after drag for natural feel
  maxTextureSize: 4096, // Lower texture size to optimize performance
  defaultYaw: "0deg", // Ensure smooth initial loading
  touchmoveTwoFingers: true, // Prevent accidental movement
  mousewheelCtrlKey: true, // Avoid excessive zooming
  navbar: false,

  plugins: [
    // MarkersPlugin without default markers
    [MarkersPlugin, {}],
    [
      AutorotatePlugin,
      {
        autorotateSpeed: "1rpm",
        autorotatePitch: "0deg",
        autostartDelay: 0,
        autostartOnIdle: false,
      },
    ],
    [
      VirtualTourPlugin,
      {
        dataMode: "client",
        positionMode: "manual",
        renderMode: "3d",
        maxTextureSize: 4096,
        preload: true,
        moveInertia: true,
        startNodeId: "Start",
        nodes: [
  /* =============================================================================== 
   |                                                                             |
   |                      EAST SIDE OF THE UNIVERSITY                            | 
   |                                                                             | 
   =============================================================================== */

          /* ================================================ 
                          STARTING POINT
           ================================================ */
          {
            id: "Start",
            panorama: "./Images/Start.webp",
          },

          /* ================================================             
                               GATES
           ================================================ */

          /* =============
               GATE 1
          ============= */
          {
            id: "Gate 1",
            panorama: "./Images/EAST/Gates/Gate 1.webp",
            links: [
              {
                nodeId: "Rotunda(front)",
                position: { yaw: 0.05, pitch: -0.15 },
              },
            ],

            /* ============================= 
                              Markers in Gate 1
                        ================================ */

            markers: [
              {
                id: "go-to-Rotunda(front)",
                position: { yaw: 0.05, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Rotunda/Rotunda(front).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Rotunda (Front)",
                style: { cursor: "pointer" },
              },
              {
                id: "gate1-info",
                position: { yaw: 0.05, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                   </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========
                      GATE 2
                     ======== */
          {
            id: "Gate 2",
            panorama: "./Images/EAST/Gates/Gate 2.webp",
            links: [
              { nodeId: "ICTC", position: { yaw: 4.89, pitch: -0.04 } },
              { nodeId: "LPDSB", position: { yaw: 3.315, pitch: -0.05 } },
            ],

            /* ============================= 
                              Markers in Gate 2
                        ================================ */

            markers: [
              {
                id: "go-to-ICTC",
                position: { yaw: 4.89, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Establishments/ICTC.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip:
                  "Information and Communications Technology Center (ICTC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LPDSB",
                position: { yaw: 3.315, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Establishments/LPDSB.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "La Porteria De San Benildo (LPDSB)",
                style: { cursor: "pointer" },
              },
              {
                id: "gate2-info",
                position: { yaw: 1.751, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                   </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========
                      GATE 4
                     ======== */
          {
            id: "Gate 4",
            panorama: "./Images/EAST/Gates/Gate 4.webp",
            links: [
              {
                nodeId: "Gate 4 Way (1)",
                position: { yaw: 1.135, pitch: -0.14 },
              },
              {
                nodeId: "G4 Parking (3)",
                position: { yaw: 2.71, pitch: -0.12 },
              },
            ],

            /* ============================= 
                              Markers in Gate 4
                        ================================ */

            markers: [
              {
                id: "go-to-Gate 4 Way (1)",
                position: { yaw: 1.135, pitch: -0.14 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-G4 Parking (3)",
                position: { yaw: 2.71, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G4)/G4 Parking (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "gate4-info",
                position: { yaw: 4.287, pitch: 0.05 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                   </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
              {
                id: "MP-info",
                position: { yaw: 5.877, pitch: 0.05 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                   </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================================
                    ROTUNDA (ST. LA SALLE MARKER)
           ================================================ */

          /* =========================== 
                      ROTUNDA (FRONT OF STATUE)
                     =========================== */
          {
            id: "Rotunda(front)",
            panorama: "./Images/EAST/Rotunda/Rotunda(front).webp",
            links: [
              { nodeId: "Gate 1", position: { yaw: 34.28, pitch: -0.05 } },
              {
                nodeId: "Rotunda(west)",
                position: { yaw: -45.3, pitch: -0.07 },
              },
              {
                nodeId: "Rotunda(east)",
                position: { yaw: 0.67, pitch: -0.09 },
              },
            ],

            /* ============================= 
                            Markers in Rotunda (Front)
                        ================================ */
            markers: [
              {
                id: "go-to-Rotunda(west)",
                position: { yaw: -45.3, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Rotunda/Rotunda(west).webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "Rotunda (West)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Rotunda(east)",
                position: { yaw: 0.67, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Rotunda/Rotunda(east).webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "Rotunda (East)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 1",
                position: { yaw: 34.28, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Gates/Gate 1.webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Magdalo Gate (Gate 1)",
                style: { cursor: "pointer" },
              },
              {
                id: "Statue-info",
                position: { yaw: 5.962, pitch: -0.12 },
                html: `<div class="info-marker">
                                      <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                      </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========================  
                      ROTUNDA (WEST OF STATUE)
                     ========================== */
          {
            id: "Rotunda(west)",
            panorama: "./Images/EAST/Rotunda/Rotunda(west).webp",
            links: [
              {
                nodeId: "Rotunda(front)",
                position: { yaw: 38.54, pitch: 0.04 },
              },
              {
                nodeId: "Rotunda(back)",
                position: { yaw: -0.8, pitch: -0.08 },
              },
              {
                nodeId: "JPAC Road (1)",
                position: { yaw: 34.562, pitch: -0.15 },
              },
            ],

            /* ============================= 
                            Markers in Rotunda (West)
                        ================================ */
            markers: [
              {
                id: "go-to-Rotunda(back)",
                position: { yaw: -0.8, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Rotunda/Rotunda(back).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Rotunda (Back)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Rotunda(front)",
                position: { yaw: 38.54, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Rotunda/Rotunda(front).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Rotunda (Front)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JPAC Road (1)",
                position: { yaw: 34.562, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Julian Felipe Hall (JFH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================== 
                      ROTUNDA (EAST OF STATUE)
                     ========================== */
          {
            id: "Rotunda(east)",
            panorama: "./Images/EAST/Rotunda/Rotunda(east).webp",
            links: [
              { nodeId: "Rotunda(front)", position: { yaw: 3.2, pitch: 0.03 } },
              { nodeId: "Rotunda(back)", position: { yaw: 4.8, pitch: -0.07 } },
              { nodeId: "IL Road (1)", position: { yaw: 7.14, pitch: -0.03 } },
            ],

            /* ============================= 
                            Markers in Image #4
                        ================================ */
            markers: [
              {
                id: "go-to-Rotunda(back)",
                position: { yaw: 4.8, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Rotunda/Rotunda(back).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Rotunda (Back)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Rotunda(front)",
                position: { yaw: 3.2, pitch: 0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Rotunda/Rotunda(front).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Rotunda (Front)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-IL Road (1)",
                position: { yaw: 7.14, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/IL Road/IL Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To La Porteria De San Benildo (LPDSB)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================== 
                      ROTUNDA (BACK OF STATUE)
                     ========================== */
          {
            id: "Rotunda(back)",
            panorama: "./Images/EAST/Rotunda/Rotunda(back).webp",
            links: [
              {
                nodeId: "Rotunda(west)",
                position: { yaw: 3.63, pitch: 0.025 },
              },
              { nodeId: "Rotunda(east)", position: { yaw: 1.9, pitch: 0 } },
              {
                nodeId: "Lake Avenue (1)",
                position: { yaw: 12.195, pitch: -0.1 },
              },
            ],

            /* ============================= 
                            Markers in Image #5
                        ================================ */
            markers: [
              {
                id: "go-to-Rotunda(west)",
                position: { yaw: 3.63, pitch: 0.025 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Rotunda/Rotunda(west).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Rotunda (West)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Rotunda(east)",
                position: { yaw: 1.9, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Rotunda/Rotunda(east).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Rotunda (East)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (1)",
                position: { yaw: 12.195, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Lake Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============================================================
                   ESTABLISHMENTS (BLDG'S, OFFICES, FACILITIES) 
           ============================================================ */

          /* ============================ 
                       JULIAN FELIPE HALL (JFH)
                     ============================ */
          {
            id: "JFH",
            panorama: "./Images/EAST/Establishments/JFH.webp",
            links: [
              {
                nodeId: "JPAC Road (1)",
                position: { yaw: 6.279, pitch: 0.06 },
              },
              {
                nodeId: "JS Road (1)",
                position: { yaw: 9.4145, pitch: -0.05 },
              },
              {
                nodeId: "Lake Avenue (1)",
                position: { yaw: 4.8, pitch: -0.05 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-JPAC Road (1)",
                position: { yaw: 6.279, pitch: 0.06 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (West)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JS Road (1)",
                position: { yaw: 9.4145, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/JS Road/JS Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (1)",
                position: { yaw: 4.8, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (Back)",
                style: { cursor: "pointer" },
              },
              {
                id: "JFH-info",
                position: { yaw: 1.59, pitch: -0.08 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================================================  
                       LASALLIAN COMMUNITY DEVELOPMENT CENTER (LCDC)
                     ================================================= */
          {
            id: "LCDC",
            panorama: "./Images/EAST/Establishments/LCDC.webp",
            links: [
              { nodeId: "JS Road (1)", position: { yaw: 8.355, pitch: 0.01 } },
              {
                nodeId: "LCDC Road (1)",
                position: { yaw: 9.93, pitch: -0.01 },
              },
              {
                nodeId: "Lake Avenue (4)",
                position: { yaw: 6.785, pitch: -0.05 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-LCDC Road (1)",
                position: { yaw: 9.93, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/LCDC Road/LCDC Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JS Road (1)",
                position: { yaw: 8.355, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/JS Road/JS Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Julian Felipe Hall (JFH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (4)",
                position: { yaw: 6.785, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (4).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "LCDC-info",
                position: { yaw: 6.12, pitch: -0.07 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================== 
                       TANGHALANG JULIAN FELIPE (TJF)
                     ================================== */
          {
            id: "TJF",
            panorama: "./Images/EAST/Establishments/TJF.webp",
            links: [
              {
                nodeId: "JPAC Road (1)",
                position: { yaw: 9.445, pitch: -0.1 },
              },
              { nodeId: "PCH", position: { yaw: 6.314, pitch: -0.05 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-JPAC Road (1)",
                position: { yaw: 9.445, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (West)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PCH",
                position: { yaw: 6.314, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Establishments/PCH.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "Paulo Campos Hall (PCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "TJF-info",
                position: { yaw: 7.92, pitch: -0.04 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =========================== 
                       PAULO CAMPOS HALL (PCH)
                     =========================== */
          {
            id: "PCH",
            panorama: "./Images/EAST/Establishments/PCH.webp",
            links: [
              {
                nodeId: "JPAC Road (2)",
                position: { yaw: 10.876, pitch: -0.12 },
              },
              { nodeId: "TJF", position: { yaw: 7.725, pitch: -0.05 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-JPAC Road (2)",
                position: { yaw: 10.876, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-TJF",
                position: { yaw: 7.725, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Establishments/TJF.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Tanghalang Julian Felipe (TJF)",
                style: { cursor: "pointer" },
              },
              {
                id: "PCH-info",
                position: { yaw: 5.64, pitch: -0.07 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============================ 
                       COLLEGE OF SCIENCE (COS)
                     ============================ */
          {
            id: "COS",
            panorama: "./Images/EAST/Establishments/COS.webp",
            links: [
              {
                nodeId: "Gate 4 Way (1)",
                position: { yaw: 4.749, pitch: -0.01 },
              },
              {
                nodeId: "Gate 4 Way (2)",
                position: { yaw: 7.891, pitch: -0.06 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                          ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (1)",
                position: { yaw: 4.749, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Magtagumpay Gate (Gate 4)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4 Way (2)",
                position: { yaw: 7.891, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Residencia San Miguel (RSM)",
                style: { cursor: "pointer" },
              },
              {
                id: "COS-info",
                position: { yaw: 5.664, pitch: -0.1 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================== 
                       AYUNTAMIENTO DE GONZALES (ADG)
                     ================================== */
          {
            id: "ADG",
            panorama: "./Images/EAST/Establishments/ADG.webp",
            links: [
              { nodeId: "AP Road (1)", position: { yaw: 5.5, pitch: -0.1 } },
              { nodeId: "AP Road (3)", position: { yaw: 3, pitch: -0.1 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-AP Road (1)",
                position: { yaw: 5.5, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/AP Road/AP Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (3)",
                position: { yaw: 3, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/AP Road/AP Road (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "ADG-info",
                position: { yaw: 7.393, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================ 
                       MILA'S DINER
                     ================ */
          {
            id: "Diner",
            panorama: "./Images/EAST/Establishments/Diner.webp",
            links: [
              {
                nodeId: "Lake Avenue (4)",
                position: { yaw: 10.585, pitch: 0 },
              },
              {
                nodeId: "Lake Avenue (5)",
                position: { yaw: 7.325, pitch: -0.05 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (4)",
                position: { yaw: 10.48, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (4).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (5)",
                position: { yaw: 7.325, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (5).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "Diner-info",
                position: { yaw: 5.768, pitch: -0.05 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                       CAFE MUSEO (CM)
                     =================== */
          {
            id: "CM",
            panorama: "./Images/EAST/Establishments/CM.webp",
            links: [
              {
                nodeId: "Lake Avenue (8)",
                position: { yaw: 2.465, pitch: -0.03 },
              },
              {
                nodeId: "Lake Avenue (9)",
                position: { yaw: 5.622, pitch: -0.03 },
              },
            ],

            /* ============================= 
                              Markers in Path ./Images
                           ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (8)",
                position: { yaw: 2.465, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (8).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (9)",
                position: { yaw: 5.622, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (9).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "CM-info",
                position: { yaw: 4.065, pitch: 0.1 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================ 
                       UNIVERSITY FOOD SQUARE (UFS)
                     ================================ */
          {
            id: "UFS",
            panorama: "./Images/EAST/Establishments/UFS.webp",
            links: [
              {
                nodeId: "Lake Avenue (9)",
                position: { yaw: 6.47, pitch: -0.03 },
              },
              {
                nodeId: "Lake Avenue (10)",
                position: { yaw: 3.325, pitch: -0.05 },
              },
              { nodeId: "Park Trail (1)", position: { yaw: 4.93, pitch: 0 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (9)",
                position: { yaw: 6.47, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (9).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Cafe Museo (CM)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (10)",
                position: { yaw: 3.325, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (10).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Park Trail (1)",
                position: { yaw: 4.93, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Park Trail/Park Trail (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Cafeteria",
                style: { cursor: "pointer" },
              },
              {
                id: "UFS-info",
                position: { yaw: 5.3, pitch: 0.27 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============================================== 
                       LADIES' AND MEN'S DORMITORY COMPLEX (LMDC)
                     ============================================== */
          {
            id: "LMDC",
            panorama: "./Images/EAST/Establishments/LMDC.webp",
            links: [
              {
                nodeId: "Lake Avenue (11)",
                position: { yaw: 6.65, pitch: -0.05 },
              },
              {
                nodeId: "West Avenue (1)",
                position: { yaw: 5.015, pitch: -0.05 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (11)",
                position: { yaw: 6.65, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (11).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (1)",
                position: { yaw: 5.015, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/West Avenue/West Avenue (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
              {
                id: "LMDC-info",
                position: { yaw: 7.44, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================================================== 
                       SEVERINO DE LAS ALAS HALL (SDLAH)/(ALUMNI BLDG)
                     =================================================== */
          {
            id: "SDLAH",
            panorama: "./Images/EAST/Establishments/SDLAH.webp",
            links: [
              {
                nodeId: "PC Campos Avenue (4)",
                position: { yaw: 6.28, pitch: 0 },
              },
              {
                nodeId: "PC Campos Avenue (5)",
                position: { yaw: 1.94, pitch: -0.02 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (4)",
                position: { yaw: 6.28, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (4).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Hotel Rafael (HR)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (5)",
                position: { yaw: 1.94, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (5).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "SDLAH-info",
                position: { yaw: 7.225, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================== 
                       HOTEL RAFAEL (HR)
                     ===================== */
          {
            id: "HR",
            panorama: "./Images/EAST/Establishments/HR.webp",
            links: [
              {
                nodeId: "PC Campos Avenue (2)",
                position: { yaw: 2.455, pitch: 0.02 },
              },
              {
                nodeId: "PC Campos Avenue (3)",
                position: { yaw: 5.7, pitch: -0.06 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (2)",
                position: { yaw: 2.455, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip:
                  "To Information and Communications Technology Center (ICTC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (3)",
                position: { yaw: 5.7, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
              {
                id: "HR-info",
                position: { yaw: 3.738, pitch: -0.05 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =========================================================== 
                       INFORMATION AND COMMUNICATIONS TECHNOLOGY CENTER (ICTC)
                     =========================================================== */
          {
            id: "ICTC",
            panorama: "./Images/EAST/Establishments/ICTC.webp",
            links: [
              { nodeId: "Gate 2", position: { yaw: 2.505, pitch: -0.02 } },
              {
                nodeId: "PC Campos Avenue (1)",
                position: { yaw: 5.64, pitch: -0.03 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Gate 2",
                position: { yaw: 2.505, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Gates/Gate 2.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: " To Magpuri Gate (Gate 2)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (1)",
                position: { yaw: 5.64, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Hotel Rafael (HR)",
                style: { cursor: "pointer" },
              },
              {
                id: "ICTC-info",
                position: { yaw: 4.052, pitch: -0.05 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================================== 
                       LA PORTERIA DE SAN BENILDO (LPDSB)
                     ====================================== */
          {
            id: "LPDSB",
            panorama: "./Images/EAST/Establishments/LPDSB.webp",
            links: [
              { nodeId: "Gate 2", position: { yaw: 4.57, pitch: -0.05 } },
              { nodeId: "IL Road (1)", position: { yaw: 7.693, pitch: -0.01 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Gate 2",
                position: { yaw: 4.57, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Gates/Gate 2.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Magpuri Gate (Gate 2)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-IL Road (1)",
                position: { yaw: 7.693, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/IL Road/IL Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (East)",
                style: { cursor: "pointer" },
              },
              {
                id: "LPDSB-info",
                position: { yaw: 5.671, pitch: 0.03 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================================== 
              AKLATANG EMILIO AGUINALDO (AEA)
          =================================== */
          {
            id: "AEA",
            panorama: "./Images/EAST/Establishments/AEA.webp",
            links: [
              { nodeId: "AEA Road (3)", position: { yaw: 4.57, pitch: -0.05 } },
              { nodeId: "AEA Road (4)", position: { yaw: 7.693, pitch: -0.01 } },
            ],

            /* ============================= 
                  Markers in Path ./Images
            ================================ */
            markers: [
              {
                id: "go-to-AEA Road (3)",
                position: { yaw: 6.3, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/AEA Road/AEA Road (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Chapel",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA Road (4)",
                position: { yaw: 3.13, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/AEA Road/AEA Road (4).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "AEA-info",
                position: { yaw: 7.845, pitch: 0.02 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ======================================================================================== 
                       ANTONIO & VICTORIA COJUANGCO MEMORIAL CHAPEL OF OUR LADY OF THE HOLY ROSARY (CHAPEL)
                     ======================================================================================== */
          {
            id: "Chapel",
            panorama: "./Images/EAST/Establishments/Chapel.webp",
            links: [
              {
                nodeId: "Museo Drive (2)",
                position: { yaw: 1.123, pitch: -0.02 },
              },
              { nodeId: "AEA Road (3)", position: { yaw: 4.34, pitch: -0.06 } },
              { nodeId: "Fountain (2)", position: { yaw: 2.7, pitch: -0.03 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Museo Drive (2)",
                position: { yaw: 1.123, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA Road (3)",
                position: { yaw: 4.34, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/AEA Road/AEA Road (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (2)",
                position: { yaw: 2.7, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Fountain",
                style: { cursor: "pointer" },
              },
              {
                id: "Chapel-info",
                position: { yaw: 5.84, pitch: 0.1 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============================ 
                       MUSEO DE LA SALLE (MDLS)
                     ============================ */
          {
            id: "MDLS",
            panorama: "./Images/EAST/Establishments/MDLS.webp",
            links: [
              {
                nodeId: "Museo Drive (1)",
                position: { yaw: 5.34, pitch: -0.1 },
              },
              { nodeId: "Museo Drive (2)", position: { yaw: 8.48, pitch: 0 } },
              { nodeId: "Fountain (2)", position: { yaw: 7.15, pitch: -0.05 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Museo Drive (1)",
                position: { yaw: 5.34, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Cafe Museo (CM)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Museo Drive (2)",
                position: { yaw: 8.48, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (2)",
                position: { yaw: 7.15, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Fountain",
                style: { cursor: "pointer" },
              },
              {
                id: "MDLS-info",
                position: { yaw: 3.764, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============= 
                       CAFETERIA
                     ============= */
          {
            id: "Cafeteria",
            panorama: "./Images/EAST/Establishments/Cafeteria.webp",
            links: [
              {
                nodeId: "Lake Avenue (11)",
                position: { yaw: 7.6, pitch: -0.01 },
              },
              { nodeId: "Batibot", position: { yaw: 9, pitch: -0.01 } },
              {
                nodeId: "Park Trail (1)",
                position: { yaw: 5.2, pitch: -0.05 },
              },
            ],

            /* ============================= 
                          Markers in Path ./Images
                      ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (11)",
                position: { yaw: 7.6, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                  <div class="pulse-container">
                                      <div class="pulse1"></div>
                                      <div class="pulse2"></div>
                                      <div class="pulse3"></div>
                                  </div>
                                  <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (11).webp" alt="marker image" />
                                  </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Batibot",
                position: { yaw: 9, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                  <div class="pulse-container">
                                      <div class="pulse1"></div>
                                      <div class="pulse2"></div>
                                      <div class="pulse3"></div>
                                  </div>
                                  <img src="./Images/EAST/Markers/Landmarks/Batibot.webp" alt="marker image" />
                                  </div>`,
                anchor: "center center",
                tooltip: "To Batibot",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Park Trail (1)",
                position: { yaw: 5.2, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                  <div class="pulse-container">
                                      <div class="pulse1"></div>
                                      <div class="pulse2"></div>
                                      <div class="pulse3"></div>
                                  </div>
                                  <img src="./Images/EAST/Markers/Park Trail/Park Trail (1).webp" alt="marker image" />
                                  </div>`,
                anchor: "center center",
                tooltip: "To Lake Park",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================================================================================
                  LANDMARKS (KEY FEATURES OF UD - NOT BUILDINGS BUT NOT ROADS EITHER) 
           ================================================================================= */

          /* =================== 
                       STUDY SHED (SS)
                     =================== */
          {
            id: "SS",
            panorama: "./Images/EAST/Landmarks/SS.webp",
            links: [
              {
                nodeId: "Lake Avenue (2)",
                position: { yaw: 5.4, pitch: -0.05 },
              },
              { nodeId: "JS Road (1)", position: { yaw: 8.13, pitch: 0.02 } },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (2)",
                position: { yaw: 5.4, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Gates/Gate 2.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (Back)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JS Road (1)",
                position: { yaw: 8.13, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/IL Road/IL Road (1).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Julian Felipe Hall (JFH)",
                style: { cursor: "pointer" },
              },
              {
                id: "SS-info",
                position: { yaw: 3.464, pitch: 0.415 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================== 
                       LUMINA BRIDGE (LB)
                     ====================== */
          {
            id: "LB",
            panorama: "./Images/EAST/Landmarks/LB.webp",
            links: [
              {
                nodeId: "Lake Avenue (7)",
                position: { yaw: 6.9, pitch: 0.02 },
              },
              {
                nodeId: "PC Campos Avenue (3)",
                position: { yaw: 5, pitch: 0.02 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (7)",
                position: { yaw: 6.9, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (7).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (3)",
                position: { yaw: 5, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
              {
                id: "LB-info",
                position: { yaw: 1.334, pitch: -0.15 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================== 
                       LAKE PARK (LP)
                     ================== */
          {
            id: "LP",
            panorama: "./Images/EAST/Landmarks/LP.webp",
            links: [
              { nodeId: "Park Trail (2)", position: { yaw: 4.6, pitch: 0 } },
              {
                nodeId: "PC Campos Avenue (8)",
                position: { yaw: 6.43, pitch: -0.01 },
              },
              {
                nodeId: "PC Campos Avenue (9)",
                position: { yaw: 5.64, pitch: 0.02 },
              },
            ],

            /* ============================= 
                          Markers in Path ./Images
                      ================================ */
            markers: [
              {
                id: "go-to-Park Trail (2)",
                position: { yaw: 4.6, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                  <div class="pulse-container">
                                      <div class="pulse1"></div>
                                      <div class="pulse2"></div>
                                      <div class="pulse3"></div>
                                  </div>
                                  <img src="./Images/EAST/Markers/Park Trail/Park Trail (2).webp" alt="marker image" />
                                  </div>`,
                anchor: "center center",
                tooltip: "To Cafeteria",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (8)",
                position: { yaw: 6.43, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                  <div class="pulse-container">
                                      <div class="pulse1"></div>
                                      <div class="pulse2"></div>
                                      <div class="pulse3"></div>
                                  </div>
                                  <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (8).webp" alt="marker image" />
                                  </div>`,
                anchor: "center center",
                tooltip: "To Francisco Barzaga Hall (FBH/POLCA Office)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (9)",
                position: { yaw: 5.64, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                  <div class="pulse-container">
                                      <div class="pulse1"></div>
                                      <div class="pulse2"></div>
                                      <div class="pulse3"></div>
                                  </div>
                                  <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (9).webp" alt="marker image" />
                                  </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "LP-info",
                position: { yaw: 2.088, pitch: -0.11 },
                html: `<div class="info-marker">
                                  <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                  </div>`,
                anchor: "center center",
                tooltip: {
                  content: "Click for more info",
                  className: "psv-tooltip--custom", // 👈 This applies the yellow style
                },
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =========== 
                       BATIBOT
                     =========== */
          {
            id: "Batibot",
            panorama: "./Images/EAST/Landmarks/Batibot.webp",
            links: [
              { nodeId: "Cafeteria", position: { yaw: 7.2, pitch: -0.05 } },
              {
                nodeId: "West Avenue (3)",
                position: { yaw: 3.53, pitch: -0.05 },
              },
            ],

            /* ============================= 
                            Markers in Path ./Images
                        ================================ */
            markers: [
              {
                id: "go-to-Cafeteria",
                position: { yaw: 7.2, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/Establishments/Cafeteria.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Cafeteria",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (3)",
                position: { yaw: 3.53, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/EAST/Markers/West Avenue/West Avenue (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
              {
                id: "Batibot-info",
                position: { yaw: 4.47, pitch: -0.035 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============ 
                       FOUNTAIN
                     ============ */

          /* ================ 
                           FOUNTAIN (1)
                         ================ */
          {
            id: "Fountain (1)",
            panorama: "./Images/EAST/Landmarks/Fountain/Fountain (1).webp",
            links: [
              { nodeId: "Museo Drive (1)", position: { yaw: 7.3, pitch: 0 } },
              { nodeId: "AEA Road (1)", position: { yaw: 4, pitch: -0.02 } },
              { nodeId: "Fountain (2)", position: { yaw: 5.95, pitch: 0 } },
              {
                nodeId: "Lake Avenue (7)",
                position: { yaw: 8.785, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Museo Drive (1)",
                position: { yaw: 7.3, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA Road (1)",
                position: { yaw: 4, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (2)",
                position: { yaw: 5.95, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Chapel",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (7)",
                position: { yaw: 8.785, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lake Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================
                           FOUNTAIN (2)
                         ================ */
          {
            id: "Fountain (2)",
            panorama: "./Images/EAST/Landmarks/Fountain/Fountain (2).webp",
            links: [
              { nodeId: "MDLS", position: { yaw: 7.345, pitch: 0 } },
              {
                nodeId: "AEA Road (2)",
                position: { yaw: 4.165, pitch: -0.01 },
              },
              { nodeId: "Fountain (1)", position: { yaw: 8.6, pitch: -0.05 } },
              { nodeId: "Chapel", position: { yaw: 5.665, pitch: 0.05 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-AEA Road (2)",
                position: { yaw: 4.165, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-MDLS",
                position: { yaw: 7.345, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/MDLS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (1)",
                position: { yaw: 8.6, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: " To Fountain",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Chapel",
                position: { yaw: 5.665, pitch: 0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/Chapel.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Chapel",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================================
                        PATHWAYS AND ROADS 
           ================================================ */

          /* =============== 
                       LAKE AVENUE             
                     =============== */

          /* =================== 
                           LAKE AVENUE (1)            
                         =================== */
          {
            id: "Lake Avenue (1)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (1).webp",
            links: [
              { nodeId: "Rotunda(back)", position: { yaw: 10.585, pitch: 0 } },
              {
                nodeId: "Lake Avenue (2)",
                position: { yaw: 7.435, pitch: -0.09 },
              },
              { nodeId: "JFH", position: { yaw: 6.05, pitch: -0.02 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Rotunda(back)",
                position: { yaw: 10.585, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Rotunda/Rotunda(back).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (Back)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (2)",
                position: { yaw: 7.435, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JFH",
                position: { yaw: 6.05, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/JFH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Julian Felipe Hall (JFH)",
                style: { cursor: "pointer" },
              },
              {
                id: "MAH-info",
                position: { yaw: 3.92, pitch: 0.03 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (2)
                         =================== */
          {
            id: "Lake Avenue (2)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (2).webp",
            links: [
              {
                nodeId: "Lake Avenue (1)",
                position: { yaw: 10.585, pitch: 0 },
              },
              {
                nodeId: "Lake Avenue (3)",
                position: { yaw: 7.435, pitch: -0.09 },
              },
              { nodeId: "SS", position: { yaw: 6.56, pitch: -0.09 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (1)",
                position: { yaw: 10.86, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (3)",
                position: { yaw: 7.706, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-SS",
                position: { yaw: 6.56, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/SS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "Study Shed",
                style: { cursor: "pointer" },
              },
              {
                id: "CTHM-info",
                position: { yaw: 2.961, pitch: -0.04 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (3)
                         =================== */
          {
            id: "Lake Avenue (3)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (3).webp",
            links: [
              {
                nodeId: "Lake Avenue (2)",
                position: { yaw: 10.585, pitch: 0 },
              },
              {
                nodeId: "Lake Avenue (4)",
                position: { yaw: 7.435, pitch: -0.09 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (2)",
                position: { yaw: 10.566, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (4)",
                position: { yaw: 7.417, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (4)
                         =================== */
          {
            id: "Lake Avenue (4)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (4).webp",
            links: [
              {
                nodeId: "Lake Avenue (3)",
                position: { yaw: 10.585, pitch: 0 },
              },
              { nodeId: "Diner", position: { yaw: 7.435, pitch: -0.09 } },
              { nodeId: "LCDC", position: { yaw: 5.537, pitch: -0.01 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (3)",
                position: { yaw: 10.282, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Diner",
                position: { yaw: 7.125, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/Diner.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LCDC",
                position: { yaw: 5.537, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/LCDC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (5)
                         =================== */
          {
            id: "Lake Avenue (5)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (5).webp",
            links: [
              {
                nodeId: "Lake Avenue (6)",
                position: { yaw: 6.11, pitch: -0.05 },
              },
              { nodeId: "Diner", position: { yaw: 2.975, pitch: -0.03 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (6)",
                position: { yaw: 6.11, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Diner",
                position: { yaw: 2.975, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/Diner.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (6)
                         =================== */
          {
            id: "Lake Avenue (6)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (6).webp",
            links: [
              {
                nodeId: "Lake Avenue (5)",
                position: { yaw: 2.233, pitch: -0.03 },
              },
              {
                nodeId: "Lake Avenue (7)",
                position: { yaw: 5.365, pitch: -0.04 },
              },
              {
                nodeId: "AEA Road (1)",
                position: { yaw: 3.815, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (7)",
                position: { yaw: 5.365, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (5)",
                position: { yaw: 2.233, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA Road (1)",
                position: { yaw: 3.815, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (7)
                         =================== */
          {
            id: "Lake Avenue (7)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (7).webp",
            links: [
              {
                nodeId: "Lake Avenue (6)",
                position: { yaw: 10.175, pitch: -0.03 },
              },
              {
                nodeId: "Lake Avenue (8)",
                position: { yaw: 7.045, pitch: -0.04 },
              },
              { nodeId: "Fountain (1)", position: { yaw: 5.8, pitch: -0.01 } },
              { nodeId: "LB", position: { yaw: 8.662, pitch: -0.01 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (8)",
                position: { yaw: 7.045, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (6)",
                position: { yaw: 10.175, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (1)",
                position: { yaw: 5.8, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Fountain",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LB",
                position: { yaw: 8.662, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/LB.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lumina Bridge (LB)",
                style: { cursor: "pointer" },
              },
              {
                id: "BG-info",
                position: { yaw: 2.375, pitch: -0.3 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
              {
                id: "CHC-info",
                position: { yaw: 5.445, pitch: -0.13 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (8)
                         =================== */
          {
            id: "Lake Avenue (8)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (8).webp",
            links: [
              {
                nodeId: "Lake Avenue (7)",
                position: { yaw: 5.458, pitch: -0.03 },
              },
              { nodeId: "CM", position: { yaw: 2.322, pitch: -0.03 } },
              {
                nodeId: "Museo Drive (1)",
                position: { yaw: 0.73, pitch: -0.02 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (7)",
                position: { yaw: 5.458, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CM",
                position: { yaw: 2.322, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/CM.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Cafe Museo (CM)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Museo Drive (1)",
                position: { yaw: 0.73, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           LAKE AVENUE (9)
                         =================== */
          {
            id: "Lake Avenue (9)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (9).webp",
            links: [
              { nodeId: "CM", position: { yaw: 2.27, pitch: -0.03 } },
              { nodeId: "UFS", position: { yaw: 5.383, pitch: -0.01 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-CM",
                position: { yaw: 2.27, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/CM.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Cafe Museo",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-UFS",
                position: { yaw: 5.383, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/UFS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                           LAKE AVENUE (10)
                         ==================== */
          {
            id: "Lake Avenue (10)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (10).webp",
            links: [
              {
                nodeId: "Lake Avenue (11)",
                position: { yaw: 9.59, pitch: -0.03 },
              },
              { nodeId: "UFS", position: { yaw: 6.48, pitch: -0.02 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-UFS",
                position: { yaw: 6.48, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/UFS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Lake Avenue (11)",
                position: { yaw: 9.59, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================== 
                           LAKE AVENUE (11)
                         ==================== */
          {
            id: "Lake Avenue (11)",
            panorama: "./Images/EAST/Lake Avenue/Lake Avenue (11).webp",
            links: [
              { nodeId: "LMDC", position: { yaw: 9.6, pitch: -0.04 } },
              {
                nodeId: "Lake Avenue (10)",
                position: { yaw: 6.456, pitch: -0.02 },
              },
              { nodeId: "Cafeteria", position: { yaw: 4.915, pitch: -0.03 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (10)",
                position: { yaw: 6.456, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LMDC",
                position: { yaw: 9.6, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/LMDC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Cafeteria",
                position: { yaw: 4.915, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/Cafeteria.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Cafeteria",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================== 
                       WEST AVENUE
                     ================================== */

          /* =================== 
                           WEST AVENUE (1)
                         =================== */
          {
            id: "West Avenue (1)",
            panorama: "./Images/EAST/West Avenue/West Avenue (1).webp",
            links: [
              { nodeId: "LMDC", position: { yaw: 4.36, pitch: -0.03 } },
              {
                nodeId: "West Avenue (2)",
                position: { yaw: 7.565, pitch: -0.03 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-West Avenue (2)",
                position: { yaw: 7.565, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/West Avenue/West Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LMDC",
                position: { yaw: 4.36, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/LMDC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           WEST AVENUE (2)
                         =================== */
          {
            id: "West Avenue (2)",
            panorama: "./Images/EAST/West Avenue/West Avenue (2).webp",
            links: [
              {
                nodeId: "West Avenue (1)",
                position: { yaw: 3.265, pitch: -0.04 },
              },
              {
                nodeId: "West Avenue (3)",
                position: { yaw: 6.445, pitch: -0.02 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-West Avenue (1)",
                position: { yaw: 3.265, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/West Avenue/West Avenue (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (3)",
                position: { yaw: 6.445, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/West Avenue/West Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           WEST AVENUE (3)
                         =================== */
          {
            id: "West Avenue (3)",
            panorama: "./Images/EAST/West Avenue/West Avenue (3).webp",
            links: [
              {
                nodeId: "West Avenue (2)",
                position: { yaw: 6.779, pitch: -0.03 },
              },
              {
                nodeId: "PC Campos Avenue (9)",
                position: { yaw: 4.555, pitch: -0.02 },
              },
              { nodeId: "Batibot", position: { yaw: 5.9, pitch: -0.03 } },
              {
                nodeId: "West Avenue (4)",
                position: { yaw: 2.973, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-West Avenue (2)",
                position: { yaw: 6.779, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/West Avenue/West Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (9)",
                position: { yaw: 4.555, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To PC Campos Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Batibot",
                position: { yaw: 5.9, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/Batibot.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Batibot",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (4)",
                position: { yaw: 2.973, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Vito Belarmino Hall (VBH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============================== 
                       JPAC ROAD (JFH-PCH-ADG-COS)             
                     =============================== */

          /* ================= 
                           JPAC ROAD (1)            
                         ================= */
          {
            id: "JPAC Road (1)",
            panorama: "./Images/EAST/JPAC Road/JPAC Road (1).webp",
            links: [
              {
                nodeId: "Rotunda(west)",
                position: { yaw: 7.405, pitch: -0.12 },
              },
              { nodeId: "TJF", position: { yaw: 10.549, pitch: -0.1 } },
              {
                nodeId: "G4 Parking (1)",
                position: { yaw: 2.705, pitch: -0.01 },
              },
              { nodeId: "JFH", position: { yaw: 12.113, pitch: -0.08 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Rotunda(west)",
                position: { yaw: 7.405, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Rotunda/Rotunda(west).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (West)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-TJF",
                position: { yaw: 10.549, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/TJF.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Tanghalang Julian Felipe (TJF)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-G4 Parking (1)",
                position: { yaw: 2.705, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G4)/G4 Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JFH",
                position: { yaw: 12.113, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/JFH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Julian Felipe Hall (JFH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           JPAC ROAD (2)            
                         ================= */
          {
            id: "JPAC Road (2)",
            panorama: "./Images/EAST/JPAC Road/JPAC Road (2).webp",
            links: [
              { nodeId: "PCH", position: { yaw: 7.545, pitch: -0.09 } },
              {
                nodeId: "JPAC Road (3)",
                position: { yaw: 10.695, pitch: 0.02 },
              },
              {
                nodeId: "G4 Parking (2)",
                position: { yaw: 9.11, pitch: 0.02 },
              },
              { nodeId: "AP Road (1)", position: { yaw: 5.975, pitch: -0.1 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-PCH",
                position: { yaw: 7.545, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/PCH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Paulo Campos Hall (PCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JPAC Road (3)",
                position: { yaw: 10.695, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-G4 Parking (2)",
                position: { yaw: 9.11, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G4)/G4 Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (1)",
                position: { yaw: 5.975, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           JPAC ROAD (3)            
                         ================ */
          {
            id: "JPAC Road (3)",
            panorama: "./Images/EAST/JPAC Road/JPAC Road (3).webp",
            links: [
              { nodeId: "Gate 4 Way (1)", position: { yaw: 10.585, pitch: 0 } },
              {
                nodeId: "JPAC Road (2)",
                position: { yaw: 7.435, pitch: -0.09 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (1)",
                position: { yaw: 8.56, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JPAC Road (2)",
                position: { yaw: 5.413, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Paulo Campos Hall (PCH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============== 
                       GATE 4 WAY            
                     ============== */

          /* ================== 
                           GATE 4 WAY (1)            
                         ================== */
          {
            id: "Gate 4 Way (1)",
            panorama: "./Images/EAST/Gate 4 Way/Gate 4 Way (1).webp",
            links: [
              {
                nodeId: "JPAC Road (3)",
                position: { yaw: 7.815, pitch: -0.1 },
              },
              { nodeId: "COS", position: { yaw: 5, pitch: 0 } },
              { nodeId: "Gate 4", position: { yaw: 10.585, pitch: 0 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-JPAC Road (3)",
                position: { yaw: 7.815, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-COS",
                position: { yaw: 6.245, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/COS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4",
                position: { yaw: 9.39, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gates/Gate 4.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magtagumpay Gate (Gate 4)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================== 
                           GATE 4 WAY (2)            
                         ================== */
          {
            id: "Gate 4 Way (2)",
            panorama: "./Images/EAST/Gate 4 Way/Gate 4 Way (2).webp",
            links: [
              { nodeId: "COS", position: { yaw: 5.22, pitch: -0.03 } },
              {
                nodeId: "Gate 4 Way (3)",
                position: { yaw: 2.075, pitch: -0.06 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-COS",
                position: { yaw: 5.22, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/COS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4 Way (3)",
                position: { yaw: 2.075, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Residencia San Miguel (RSM)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           GATE 4 WAY  (3)            
                         =================== */
          {
            id: "Gate 4 Way (3)",
            panorama: "./Images/EAST/Gate 4 Way/Gate 4 Way (3).webp",
            links: [
              {
                nodeId: "Gate 4 Way (2)",
                position: { yaw: 7.63, pitch: -0.03 },
              },
              {
                nodeId: "Gate 4 Way (4)",
                position: { yaw: 4.491, pitch: -0.05 },
              },
              { nodeId: "COS Parking", position: { yaw: 6.01, pitch: 0 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (2)",
                position: { yaw: 7.63, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4 Way (4)",
                position: { yaw: 4.491, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-COS Parking",
                position: { yaw: 6.01, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (COS)/COS Parking.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           GATE 4 WAY  (4)            
                         =================== */
          {
            id: "Gate 4 Way (4)",
            panorama: "./Images/EAST/Gate 4 Way/Gate 4 Way (4).webp",
            links: [
              {
                nodeId: "Gate 4 Way (3)",
                position: { yaw: 7.47, pitch: -0.03 },
              },
              {
                nodeId: "Gate 4 Way (5)",
                position: { yaw: 4.51, pitch: -0.06 },
              },
              {
                nodeId: "LCDC Road (3)",
                position: { yaw: 5.896, pitch: -0.1 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (3)",
                position: { yaw: 7.47, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4 Way (5)",
                position: { yaw: 4.51, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Residencia San Miguel (RSM)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LCDC Road (3)",
                position: { yaw: 5.896, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/LCDC Road/LCDC Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           GATE 4 WAY  (5)            
                         =================== */
          {
            id: "Gate 4 Way (5)",
            panorama: "./Images/EAST/Gate 4 Way/Gate 4 Way (5).webp",
            links: [
              {
                nodeId: "Gate 4 Way (4)",
                position: { yaw: 2.85, pitch: 0.04 },
              },
              {
                nodeId: "Gate 4 Way (6)",
                position: { yaw: 5.895, pitch: -0.07 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (4)",
                position: { yaw: 2.85, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4 Way (6)",
                position: { yaw: 5.895, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Chapel",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           GATE 4 WAY  (6)            
                         =================== */
          {
            id: "Gate 4 Way (6)",
            panorama: "./Images/EAST/Gate 4 Way/Gate 4 Way (6).webp",
            links: [
              {
                nodeId: "Gate 4 Way (5)",
                position: { yaw: 8.08, pitch: 0.04 },
              },
              {
                nodeId: "Gate 4 Way (7)",
                position: { yaw: 5.03, pitch: -0.03 },
              },
              {
                nodeId: "AEA Road (4)",
                position: { yaw: 6.473, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (5)",
                position: { yaw: 8.08, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4 Way (7)",
                position: { yaw: 5.03, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA Road (4)",
                position: { yaw: 6.473, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "RSM-info",
                position: { yaw: 0.911, pitch: -0.04 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           GATE 4 WAY  (7)            
                         =================== */
          {
            id: "Gate 4 Way (7)",
            panorama: "./Images/EAST/Gate 4 Way/Gate 4 Way (7).webp",
            links: [
              { nodeId: "Gate 4 Way (6)", position: { yaw: 6.34, pitch: 0 } },
              { nodeId: "LCDC Road (3)", position: { yaw: 3.74, pitch: 0 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (6)",
                position: { yaw: 6.34, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Chapel Parking",
                position: { yaw: 3.74, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (Chapel)/Chapel Parking.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============================
                       JS ROAD (JFH-STUDY SHED)           
                     ============================ */

          /* ===============
                           JS ROAD (1)           
                         =============== */
          {
            id: "JS Road (1)",
            panorama: "./Images/EAST/JS Road/JS Road (1).webp",
            links: [
              { nodeId: "JFH", position: { yaw: 6.925, pitch: -0.05 } },
              { nodeId: "LCDC", position: { yaw: 3.783, pitch: -0.06 } },
              { nodeId: "SS", position: { yaw: 5.37, pitch: -0.15 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-JFH",
                position: { yaw: 6.925, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/JFH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Julian Felipe Hall (JFH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LCDC",
                position: { yaw: 3.783, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/LCDC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-SS",
                position: { yaw: 5.37, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/SS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Study Shed (SS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============================
                       LCDC ROAD (LCDC-RESIDENCIA)           
                     =============================== */

          /* ================= 
                           LCDC ROAD (1)           
                         ================= */
          {
            id: "LCDC Road (1)",
            panorama: "./Images/EAST/LCDC Road/LCDC Road (1).webp",
            links: [
              {
                nodeId: "LCDC Road (2)",
                position: { yaw: 7.414, pitch: 0.02 },
              },
              { nodeId: "LCDC", position: { yaw: 4.265, pitch: -0.1 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-LCDC",
                position: { yaw: 4.265, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/LCDC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LCDC Road (2)",
                position: { yaw: 7.414, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/LCDC Road/LCDC Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           LCDC ROAD (2)           
                         ================= */
          {
            id: "LCDC Road (2)",
            panorama: "./Images/EAST/LCDC Road/LCDC Road (2).webp",
            links: [
              {
                nodeId: "LCDC Road (1)",
                position: { yaw: 2.431, pitch: -0.12 },
              },
              {
                nodeId: "LCDC Road (3)",
                position: { yaw: 5.572, pitch: -0.01 },
              },
              { nodeId: "AP Road (3)", position: { yaw: 4.01, pitch: 0.04 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-LCDC Road (1)",
                position: { yaw: 2.431, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/LCDC Road/LCDC Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LCDC Road (3)",
                position: { yaw: 5.572, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/LCDC Road/LCDC Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (3)",
                position: { yaw: 4.01, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           LCDC ROAD (3)           
                         ================= */
          {
            id: "LCDC Road (3)",
            panorama: "./Images/EAST/LCDC Road/LCDC Road (3).webp",
            links: [
              {
                nodeId: "Gate 4 Way (4)",
                position: { yaw: 3.08, pitch: 0.02 },
              },
              {
                nodeId: "LCDC Road (2)",
                position: { yaw: 6.219, pitch: -0.12 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-LCDC Road (2)",
                position: { yaw: 6.219, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/LCDC Road/LCDC Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4 Way (4)",
                position: { yaw: 3.08, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================
                       AP ROAD (ADG-PCH)           
                     ===================== */

          /* ===============
                           AP ROAD (1)           
                         =============== */
          {
            id: "AP Road (1)",
            panorama: "./Images/EAST/AP Road/AP Road (1).webp",
            links: [
              { nodeId: "AP Road (2)", position: { yaw: 1.505, pitch: -0.05 } },
              {
                nodeId: "JPAC Road (2)",
                position: { yaw: 4.655, pitch: -0.1 },
              },
              { nodeId: "ADG", position: { yaw: 7.4, pitch: 0.07 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-JPAC Road (2)",
                position: { yaw: 4.655, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (2)",
                position: { yaw: 1.505, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ADG",
                position: { yaw: 7.4, pitch: 0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/ADG.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============
                           AP ROAD (2)           
                         =============== */
          {
            id: "AP Road (2)",
            panorama: "./Images/EAST/AP Road/AP Road (2).webp",
            links: [
              { nodeId: "AP Road (1)", position: { yaw: 4.484, pitch: -0.03 } },
              { nodeId: "AP Road (3)", position: { yaw: 1.334, pitch: -0.03 } },
              { nodeId: "ADG", position: { yaw: 6.042, pitch: 0.18 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-AP Road (1)",
                position: { yaw: 4.484, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (3)",
                position: { yaw: 1.334, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ADG",
                position: { yaw: 6.042, pitch: 0.18 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/ADG.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============
                           AP ROAD (3)           
                         =============== */
          {
            id: "AP Road (3)",
            panorama: "./Images/EAST/AP Road/AP Road (3).webp",
            links: [
              { nodeId: "AP Road (2)", position: { yaw: 4.845, pitch: -0.05 } },
              { nodeId: "AP Road (4)", position: { yaw: 7.015, pitch: 0.12 } },
              { nodeId: "ADG", position: { yaw: 5.19, pitch: 0.06 } },
              {
                nodeId: "LCDC Road (2)",
                position: { yaw: 7.993, pitch: -0.06 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-AP Road (2)",
                position: { yaw: 4.845, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (4)",
                position: { yaw: 7.015, pitch: 0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ADG",
                position: { yaw: 5.19, pitch: 0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/ADG.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LCDC Road (2)",
                position: { yaw: 7.993, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/LCDC Road/LCDC Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============== 
                           AP ROAD (4)           
                         =============== */
          {
            id: "AP Road (4)",
            panorama: "./Images/EAST/AP Road/AP Road (4).webp",
            links: [
              { nodeId: "COS Parking", position: { yaw: 5, pitch: -0.05 } },
              { nodeId: "AP Road (3)", position: { yaw: 2.07, pitch: -0.31 } },
              { nodeId: "ADG", position: { yaw: 2.93, pitch: -0.01 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-COS Parking",
                position: { yaw: 5, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (COS)/COS Parking.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (3)",
                position: { yaw: 2.07, pitch: -0.31 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lasallian Community Development Center (LCDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ADG",
                position: { yaw: 2.93, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/ADG.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                       PC CAMPOS AVENUE
                     ==================== */

          /* ========================
                           PC CAMPOS AVENUE (1)
                         ======================== */
          {
            id: "PC Campos Avenue (1)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (1).webp",
            links: [
              { nodeId: "ICTC", position: { yaw: 3.967, pitch: -0.01 } },
              {
                nodeId: "PC Campos Avenue (2)",
                position: { yaw: 7.104, pitch: -0.04 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-ICTC",
                position: { yaw: 3.967, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/ICTC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To Information and Communications Technology Center (ICTC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (2)",
                position: { yaw: 7.104, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Hotel Rafael (HR)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (2)
                         ======================== */
          {
            id: "PC Campos Avenue (2)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (2).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (1)",
                position: { yaw: 0.615, pitch: -0.01 },
              },
              { nodeId: "HR", position: { yaw: 3.73, pitch: -0.05 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (1)",
                position: { yaw: 0.615, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To Information and Communications Technology Center (ICTC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-HR",
                position: { yaw: 3.73, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/HR.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Hotel Rafael (HR)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (3)
                         ======================== */
          {
            id: "PC Campos Avenue (3)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (3).webp",
            links: [
              { nodeId: "HR", position: { yaw: 2.38, pitch: 0.02 } },
              {
                nodeId: "PC Campos Avenue (4)",
                position: { yaw: 6.15, pitch: -0.02 },
              },
              { nodeId: "LB", position: { yaw: 4.5, pitch: -0.05 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-HR",
                position: { yaw: 2.38, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/HR.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Hotel Rafael (HR)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (4)",
                position: { yaw: 6.15, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LB",
                position: { yaw: 4.5, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/LB.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Lumina Bridge (LB)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (4)
                         ======================== */
          {
            id: "PC Campos Avenue (4)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (4).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (3)",
                position: { yaw: 0.3, pitch: 0 },
              },
              { nodeId: "SDLAH", position: { yaw: 3.35, pitch: -0.05 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (3)",
                position: { yaw: 0.3, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Hotel Rafael (HR)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-SDLAH",
                position: { yaw: 3.35, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/SDLAH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (5)
                         ======================== */
          {
            id: "PC Campos Avenue (5)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (5).webp",
            links: [
              { nodeId: "SDLAH", position: { yaw: 0.19, pitch: 0 } },
              {
                nodeId: "PC Campos Avenue (6)",
                position: { yaw: 3.25, pitch: -0.04 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-SDLAH",
                position: { yaw: 0.19, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/SDLAH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (6)",
                position: { yaw: 3.25, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (6)
                         ======================== */
          {
            id: "PC Campos Avenue (6)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (6).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (5)",
                position: { yaw: 2.528, pitch: -0.04 },
              },
              {
                nodeId: "PC Campos Avenue (7)",
                position: { yaw: 5.65, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (5)",
                position: { yaw: 2.528, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (7)",
                position: { yaw: 5.65, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (7)
                         ======================== */
          {
            id: "PC Campos Avenue (7)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (7).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (6)",
                position: { yaw: 1.26, pitch: -0.02 },
              },
              {
                nodeId: "PC Campos Avenue (8)",
                position: { yaw: 4.389, pitch: -0.07 },
              },
              {
                nodeId: "PCCA Parking (1)",
                position: { yaw: 6, pitch: -0.07 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (6)",
                position: { yaw: 1.26, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (8)",
                position: { yaw: 4.389, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Francisco Barzaga Hall (FBH/POLCA Office)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PCCA Parking (1)",
                position: { yaw: 6, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (8)
                         ======================== */
          {
            id: "PC Campos Avenue (8)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (8).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (7)",
                position: { yaw: 2.527, pitch: -0.07 },
              },
              {
                nodeId: "PC Campos Avenue (9)",
                position: { yaw: 5.675, pitch: -0.02 },
              },
              {
                nodeId: "Park Trail (2)",
                position: { yaw: 4.821, pitch: -0.01 },
              },
              {
                nodeId: "Acacia Avenue (1)",
                position: { yaw: 4.821, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (7)",
                position: { yaw: 2.527, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Severino De Las Alas Hall (SDLAH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (9)",
                position: { yaw: 5.675, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Park Trail (2)",
                position: { yaw: 4.821, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Park Trail/Park Trail (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (1)",
                position: { yaw: 7.165, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                           PC CAMPOS AVENUE (9)
                         ======================== */
          {
            id: "PC Campos Avenue (9)",
            panorama:
              "./Images/EAST/PC Campos Avenue/PC Campos Avenue (9).webp",
            links: [
              {
                nodeId: "West Avenue (3)",
                position: { yaw: 2.727, pitch: -0.02 },
              },
              {
                nodeId: "PC Campos Avenue (8)",
                position: { yaw: 5.88, pitch: -0.03 },
              },
              {
                nodeId: "Park Trail (2)",
                position: { yaw: 0.6, pitch: -0.04 },
              },
              { nodeId: "LDH (1)", position: { yaw: 3.645, pitch: -0.08 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-West Avenue (3)",
                position: { yaw: 2.727, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/West Avenue/West Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (8)",
                position: { yaw: 5.88, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Francisco Barzaga Hall (FBH/POLCA Office)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Park Trail (2)",
                position: { yaw: 0.6, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Park Trail/Park Trail (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LDH (1)",
                position: { yaw: 3.645, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================
                       IL ROAD (ICTC-LPDSB)
                     ======================== */

          /* ==============
                          IL ROAD (1)
                         ============== */
          {
            id: "IL Road (1)",
            panorama: "./Images/EAST/IL Road/IL Road (1).webp",
            links: [
              { nodeId: "LPDSB", position: { yaw: 3.836, pitch: -0.02 } },
              {
                nodeId: "Rotunda(east)",
                position: { yaw: 6.973, pitch: -0.03 },
              },
              {
                nodeId: "G2 Parking (2)",
                position: { yaw: 5.41, pitch: -0.03 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-LPDSB",
                position: { yaw: 3.836, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/LPDSB.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To La Porteria De San Benildo (LPDSB)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Rotunda(east)",
                position: { yaw: 6.973, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Rotunda/Rotunda(east).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda (East)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-G2 Parking (2)",
                position: { yaw: 5.41, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G2)/G2 Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============== 
                       MUSEO DRIVE
                     =============== */

          /* ===================
                           MUSEO DRIVE (1)
                         =================== */
          {
            id: "Museo Drive (1)",
            panorama: "./Images/EAST/Museo Drive/Museo Drive (1).webp",
            links: [
              {
                nodeId: "Lake Avenue (8)",
                position: { yaw: 3.73, pitch: -0.08 },
              },
              { nodeId: "MDLS", position: { yaw: 6.845, pitch: -0.02 } },
              { nodeId: "Fountain (1)", position: { yaw: 5.37, pitch: -0.02 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (8)",
                position: { yaw: 3.73, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Cafe Museo (CM)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-MDLS",
                position: { yaw: 6.845, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/MDLS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (1)",
                position: { yaw: 5.37, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Fountain",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================== 
                           MUSEO DRIVE (2)
                         =================== */
          {
            id: "Museo Drive (2)",
            panorama: "./Images/EAST/Museo Drive/Museo Drive (2).webp",
            links: [
              {
                nodeId: "Museo Drive (3)",
                position: { yaw: 5.54, pitch: -0.03 },
              },
              { nodeId: "MDLS", position: { yaw: 2.427, pitch: -0.07 } },
              { nodeId: "Chapel", position: { yaw: 4.01, pitch: -0.02 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Museo Drive (3)",
                position: { yaw: 5.54, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-MDLS",
                position: { yaw: 2.427, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/MDLS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Chapel",
                position: { yaw: 4.01, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/Chapel.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Chapel",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           MUSEO DRIVE (3)
                         =================== */
          {
            id: "Museo Drive (3)",
            panorama: "./Images/EAST/Museo Drive/Museo Drive (3).webp",
            links: [
              {
                nodeId: "Museo Drive (2)",
                position: { yaw: 2.66, pitch: -0.06 },
              },
              {
                nodeId: "Chapel Parking",
                position: { yaw: 6.4, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Museo Drive (2)",
                position: { yaw: 2.66, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Chapel Parking",
                position: { yaw: 6.4, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (Chapel)/Chapel Parking.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============ 
                       AEA ROAD
                     ============ */

          /* ================ 
                           AEA ROAD (1)
                         ================ */
          {
            id: "AEA Road (1)",
            panorama: "./Images/EAST/AEA Road/AEA Road (1).webp",
            links: [
              {
                nodeId: "Lake Avenue (6)",
                position: { yaw: 5.65, pitch: -0.08 },
              },
              { nodeId: "AEA Road (2)", position: { yaw: 2.49, pitch: -0.01 } },
              { nodeId: "Fountain (1)", position: { yaw: 3.93, pitch: -0.06 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Lake Avenue (6)",
                position: { yaw: 5.65, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Lake Avenue/Lake Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA Road (2)",
                position: { yaw: 2.49, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (1)",
                position: { yaw: 3.93, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Fountain",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================
                           AEA ROAD (2)
                         ================ */
          {
            id: "AEA Road (2)",
            panorama: "./Images/EAST/AEA Road/AEA Road (2).webp",
            links: [
              { nodeId: "AEA Road (3)", position: { yaw: 1.28, pitch: -0.02 } },
              { nodeId: "AEA Road (1)", position: { yaw: 4.43, pitch: -0.07 } },
              { nodeId: "Fountain (2)", position: { yaw: 2.8, pitch: -0.08 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-AEA Road (3)",
                position: { yaw: 1.28, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA Road (1)",
                position: { yaw: 4.43, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Fountain (2)",
                position: { yaw: 2.8, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Landmarks/Fountain/Fountain (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Fountain",
                style: { cursor: "pointer" },
              },
              {
                id: "ERC-info",
                position: { yaw: 5.965, pitch: 0.27 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================
                           AEA ROAD (3)
                         ================ */
          {
            id: "AEA Road (3)",
            panorama: "./Images/EAST/AEA Road/AEA Road (3).webp",
            links: [
              {
                nodeId: "AEA Road (2)",
                position: { yaw: 3.175, pitch: -0.06 },
              },
              { nodeId: "AEA", position: { yaw: 6.315, pitch: -0.04 } },
              { nodeId: "Chapel", position: { yaw: 7.872, pitch: -0.05 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-AEA Road (2)",
                position: { yaw: 3.175, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AEA Road/AEA Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mila's Diner",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA",
                position: { yaw: 6.315, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/AEA.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Chapel",
                position: { yaw: 7.872, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/Chapel.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Chapel",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================ 
                           AEA ROAD (4)
                         ================ */
          {
            id: "AEA Road (4)",
            panorama: "./Images/EAST/AEA Road/AEA Road (4).webp",
            links: [
              {
                nodeId: "Gate 4 Way (6)",
                position: { yaw: 5.572, pitch: -0.02 },
              },
              { nodeId: "AEA", position: { yaw: 2.443, pitch: -0.03 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (6)",
                position: { yaw: 5.572, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AEA",
                position: { yaw: 2.443, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Establishments/AEA.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Aklatang Emilio Aguinaldo (AEA)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============== 
                       PARK TRAIL
                     ============== */

          /* ==================
                           PARK TRAIL (1)
                         ================== */
          {
            id: "Park Trail (1)",
            panorama: "./Images/EAST/Park Trail/Park Trail (1).webp",
            links: [
              {
                nodeId: "Park Trail (2)",
                position: { yaw: 3.61, pitch: -0.01 },
              },
              { nodeId: "Cafeteria", position: { yaw: 2, pitch: -0.03 } },
              { nodeId: "UFS", position: { yaw: 6.79, pitch: -0.01 } },
            ],

            /* ============================= 
                              Markers in Path ./Images
                          ================================ */
            markers: [
              {
                id: "go-to-Park Trail (2)",
                position: { yaw: 3.61, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Park Trail/Park Trail (1).webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Lake Park (LP)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Cafeteria",
                position: { yaw: 2, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Establishments/Cafeteria.webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Cafeteria",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-UFS",
                position: { yaw: 6.79, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Establishments/UFS.webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Ladies' & Men's Dormitory Complex (LMDC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           PARK TRAIL (2)
                         ================== */
          {
            id: "Park Trail (2)",
            panorama: "./Images/EAST/Park Trail/Park Trail (2).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (8)",
                position: { yaw: 2.61, pitch: -0.01 },
              },
              {
                nodeId: "PC Campos Avenue (9)",
                position: { yaw: 1.99, pitch: -0.01 },
              },
              { nodeId: "LP", position: { yaw: 3.5, pitch: -0.06 } },
              {
                nodeId: "Park Trail (1)",
                position: { yaw: 5.55, pitch: -0.02 },
              },
            ],

            /* ============================= 
                              Markers in Path ./Images
                          ================================ */
            markers: [
              {
                id: "go-to-PC Campos Avenue (8)",
                position: { yaw: 2.61, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (8).webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Francisco Barzaga Hall (FBH/POLCA Office)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PC Campos Avenue (9)",
                position: { yaw: 1.99, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (9).webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LP",
                position: { yaw: 3.5, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Landmarks/LP.webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Lake Park (LP)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Park Trail (1)",
                position: { yaw: 5.55, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                      <div class="pulse-container">
                                          <div class="pulse1"></div>
                                          <div class="pulse2"></div>
                                          <div class="pulse3"></div>
                                      </div>
                                      <img src="./Images/EAST/Markers/Park Trail/Park Trail (1).webp" alt="marker image" />
                                      </div>`,
                anchor: "center center",
                tooltip: "To Cafeteria",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================== 
                    PARKING SPACES            
           ================================== */

          /* ============================= 
                       PARKING (GATE 1 & GATE 4)            
                     ============================= */

          /* ===============
                           PARKING (1)            
                         =============== */
          {
            id: "G4 Parking (1)",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (G1 & G4)/G4 Parking (1).webp",
            links: [
              {
                nodeId: "JPAC Road (1)",
                position: { yaw: 3.805, pitch: -0.18 },
              },
              {
                nodeId: "G4 Parking (2)",
                position: { yaw: 8.55, pitch: -0.02 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-JPAC Road (1)",
                position: { yaw: 3.805, pitch: -0.18 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Julian Felipe Hall (JFH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-G4 Parking (2)",
                position: { yaw: 8.55, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G4)/G4 Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============
                           PARKING (2)            
                         =============== */
          {
            id: "G4 Parking (2)",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (G1 & G4)/G4 Parking (2).webp",
            links: [
              {
                nodeId: "G4 Parking (1)",
                position: { yaw: 5.413, pitch: -0.09 },
              },
              {
                nodeId: "G4 Parking (3)",
                position: { yaw: 8.55, pitch: -0.05 },
              },
              {
                nodeId: "JPAC Road (2)",
                position: { yaw: 3.822, pitch: -0.18 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-G4 Parking (1)",
                position: { yaw: 5.413, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G4)/G4 Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-G4 Parking (3)",
                position: { yaw: 8.55, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G4)/G4 Parking (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-JPAC Road (2)",
                position: { yaw: 3.822, pitch: -0.18 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/JPAC Road/JPAC Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============
                           PARKING (3)            
                         =============== */
          {
            id: "G4 Parking (3)",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (G1 & G4)/G4 Parking (3).webp",
            links: [
              {
                nodeId: "G4 Parking (2)",
                position: { yaw: 5.3, pitch: -0.05 },
              },
              { nodeId: "Gate 4", position: { yaw: 8.5, pitch: 0.01 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-G4 Parking (2)",
                position: { yaw: 5.3, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G4)/G4 Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Gate 4",
                position: { yaw: 8.5, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gates/Gate 4.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magtagumpay Gate (Gate 4)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============================
                       PARKING (GATE 1 & GATE 2)            
                     ============================= */

          /* ===============
                           PARKING (1)            
                         =============== */
          {
            id: "G2 Parking (1)",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (G1 & G2)/G2 Parking (1).webp",
            links: [
              {
                nodeId: "G2 Parking (2)",
                position: { yaw: 8.032, pitch: -0.08 },
              },
              { nodeId: "IL Road (1)", position: { yaw: 6.9, pitch: -0.04 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-G2 Parking (2)",
                position: { yaw: 8.032, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G2)/G2 Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-IL Road (1)",
                position: { yaw: 6.9, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/IL Road/IL Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============== 
                           PARKING (2)            
                         =============== */
          {
            id: "G2 Parking (2)",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (G1 & G2)/G2 Parking (2).webp",
            links: [
              {
                nodeId: "G2 Parking (1)",
                position: { yaw: 7.4, pitch: -0.05 },
              },
              { nodeId: "G2 Parking (3)", position: { yaw: 4, pitch: -0.05 } },
              { nodeId: "IL Road (1)", position: { yaw: 8.86, pitch: -0.07 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-G2 Parking (1)",
                position: { yaw: 7.4, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G2)/G2 Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-G2 Parking (3)",
                position: { yaw: 4, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G2)/G2 Parking (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-IL Road (1)",
                position: { yaw: 8.86, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/IL Road/IL Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============
                           PARKING (3)            
                         =============== */
          {
            id: "G2 Parking (3)",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (G1 & G2)/G2 Parking (3).webp",
            links: [
              {
                nodeId: "G2 Parking (2)",
                position: { yaw: 6.655, pitch: -0.06 },
              },
              { nodeId: "IL Road (1)", position: { yaw: 7.35, pitch: -0.01 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-G2 Parking (2)",
                position: { yaw: 6.655, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                <div class="pulse-container">
                                <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Parking Spaces/Parking (G1 & G2)/G2 Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-IL Road (1)",
                position: { yaw: 7.35, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/IL Road/IL Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================================
                       PARKING (COLLEGE OF SCIENCE)            
                     ================================ */

          /* =============== 
                           COS PARKING            
                         =============== */
          {
            id: "COS Parking",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (COS)/COS Parking.webp",
            links: [
              {
                nodeId: "Gate 4 Way (3)",
                position: { yaw: 5.35, pitch: -0.07 },
              },
              { nodeId: "AP Road (4)", position: { yaw: 8.77, pitch: -0.03 } },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (3)",
                position: { yaw: 5.35, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AP Road (4)",
                position: { yaw: 8.765, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/AP Road/AP Road (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ayuntamiento De Gonzales (ADG)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                       PARKING (CHAPEL)            
                     ==================== */

          /* ==================
                           CHAPEL PARKING           
                         ================== */
          {
            id: "Chapel Parking",
            panorama:
              "./Images/EAST/Parking Spaces/Parking (Chapel)/Chapel Parking.webp",
            links: [
              {
                nodeId: "Gate 4 Way (7)",
                position: { yaw: 4.57, pitch: -0.02 },
              },
              {
                nodeId: "Museo Drive (3)",
                position: { yaw: 9.07, pitch: -0.06 },
              },
            ],

            /* ============================= 
                                Markers in Path ./Images
                            ================================ */
            markers: [
              {
                id: "go-to-Gate 4 Way (7)",
                position: { yaw: 4.57, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Gate 4 Way/Gate 4 Way (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To College of Science (COS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Museo Drive (3)",
                position: { yaw: 9.07, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/Museo Drive/Museo Drive (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Museo De La Salle (MDLS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============================================================================== 
   |                                                                             |
   |                       WEST SIDE OF THE UNIVERSITY                           |
   |                                                                             |
   =============================================================================== */

          /* ===================================================================
                                      GATES
           =================================================================== */

          /* ==========
                       GATE 3
                     ========== */
          {
            id: "Gate 3",
            panorama: "./Images/WEST/Gates/Gate 3.webp",
            links: [
              { nodeId: "Rotunda", position: { yaw: 1.025, pitch: -0.01 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-Rotunda",
                position: { yaw: 1.025, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Rotunda/Rotunda.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Rotunda",
                style: { cursor: "pointer" },
              },
              {
                id: "gate3-info",
                position: { yaw: 4.07, pitch: -0.1 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================================================================
                           ROTUNDA (ST. LA SALLE MARKER)
           =================================================================== */

          /* ===========
                       ROTUNDA
                     =========== */
          {
            id: "Rotunda",
            panorama: "./Images/WEST/Rotunda/Rotunda.webp",
            links: [
              { nodeId: "Gate 3", position: { yaw: 6.24, pitch: -0.07 } },
              {
                nodeId: "Oval Road (14)",
                position: { yaw: 3.283, pitch: -0.03 },
              },
            ],

            /* ============================= 
                                Markers in Rotunda
                        ================================ */

            markers: [
              {
                id: "go-to-Gate 3",
                position: { yaw: 6.24, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Gates/Gate 3.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (14)",
                position: { yaw: 3.283, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Oval Road/Oval Road (14).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================================================================
                     ESTABLISHMENTS (BLDG'S, OFFICES, FACILITIES) 
           =================================================================== */

          /* =============================
                       CANDIDO TIRONA HALL (CTH)
                     ============================= */
          {
            id: "CTH",
            panorama: "./Images/WEST/Establishments/CTH.webp",
            links: [
              { nodeId: "FCH (2)", position: { yaw: 5.92, pitch: -0.23 } },
              { nodeId: "AL (3)", position: { yaw: 1.545, pitch: -0.18 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-FCH (2)",
                position: { yaw: 5.92, pitch: -0.23 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Establishments/FCH/FCH (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (3)",
                position: { yaw: 1.545, pitch: -0.18 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Academy Lane/AL (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "CTH-info",
                position: { yaw: 3.122, pitch: -0.1 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
              {
                id: "FCH-info",
                position: { yaw: 0.33, pitch: -0.08 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==============================
                       FELIPE CALDERON HALL (FCH)
                     ============================== */

          /* ===========
                           FCH (1)
                         =========== */
          {
            id: "FCH (1)",
            panorama: "./Images/WEST/Establishments/FCH/FCH (1).webp",
            links: [
              { nodeId: "LDH (3)", position: { yaw: 5.187, pitch: -0.04 } },
              { nodeId: "FCH (2)", position: { yaw: 0.48, pitch: -0.05 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-LDH (3)",
                position: { yaw: 5.187, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-FCH (2)",
                position: { yaw: 0.48, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/FCH/FCH (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                           FCH (2)
                         =========== */
          {
            id: "FCH (2)",
            panorama: "./Images/WEST/Establishments/FCH/FCH (2).webp",
            links: [
              { nodeId: "FCH (1)", position: { yaw: 3.18, pitch: -0.07 } },
              { nodeId: "CTH", position: { yaw: 0.8, pitch: -0.08 } },
              { nodeId: "AL (1)", position: { yaw: 0.55, pitch: -0.03 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-FCH (1)",
                position: { yaw: 5.245, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/FCH/FCH (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CTH",
                position: { yaw: 2.125, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/CTH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (1)",
                position: { yaw: 0.55, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                       GRANDSTAND (GS)
                     =================== */

          /* ==========
                            GS (1)
                          ========== */
          {
            id: "GS (1)",
            panorama: "./Images/WEST/Establishments/GS/GS (1).webp",
            links: [
              { nodeId: "Oval (Mid)", position: { yaw: 5.15, pitch: 0 } },
              { nodeId: "GS (2)", position: { yaw: 1.99, pitch: 0.1 } },
              { nodeId: "LGD (1)", position: { yaw: 0.6, pitch: 0 } },
              { nodeId: "RGD (1)", position: { yaw: 3.48, pitch: 0 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval (Mid)",
                position: { yaw: 5.17, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Mid).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-GS (2)",
                position: { yaw: 1.99, pitch: 0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/GS/GS (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LGD (1)",
                position: { yaw: 0.6, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Left/LGD (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Business Administration and Accountancy (CBAA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (1)",
                position: { yaw: 3.48, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "GS-info",
                position: { yaw: 1.985, pitch: -0.26 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                            GS (2)
                          ========== */
          {
            id: "GS (2)",
            panorama: "./Images/WEST/Establishments/GS/GS (2).webp",
            links: [
              { nodeId: "GS (1)", position: { yaw: 4.93, pitch: -0.28 } },
              { nodeId: "GS (3)", position: { yaw: 1.74, pitch: 0.26 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-GS (1)",
                position: { yaw: 4.93, pitch: -0.28 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/GS/GS (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-GS (3)",
                position: { yaw: 1.74, pitch: 0.26 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/GS/GS (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                            GS (3)
                          ========== */
          {
            id: "GS (3)",
            panorama: "./Images/WEST/Establishments/GS/GS (3).webp",
            links: [
              { nodeId: "GS (2)", position: { yaw: 3.94, pitch: -0.34 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-GS (2)",
                position: { yaw: 3.94, pitch: -0.34 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/GS/GS (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============================
                       LADISLAO DIWA HALL (LDH)
                     ============================ */

          /* ===========
                            LDH (1)
                          =========== */
          {
            id: "LDH (1)",
            panorama: "./Images/WEST/Establishments/LDH/LDH (1).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (9)",
                position: { yaw: 3.18, pitch: -0.07 },
              },
              { nodeId: "LDH (2)", position: { yaw: 0.8, pitch: -0.08 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PC Campos Avenue (9)",
                position: { yaw: 3.18, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LDH (2)",
                position: { yaw: 0.8, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                            LDH (2)
                          =========== */
          {
            id: "LDH (2)",
            panorama: "./Images/WEST/Establishments/LDH/LDH (2).webp",
            links: [
              { nodeId: "LDH (1)", position: { yaw: 3.1, pitch: -0.09 } },
              { nodeId: "LDH (3)", position: { yaw: 0.522, pitch: -0.04 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-LDH (1)",
                position: { yaw: 3.1, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LDH (3)",
                position: { yaw: 0.522, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                            LDH (3)
                          =========== */
          {
            id: "LDH (3)",
            panorama: "./Images/WEST/Establishments/LDH/LDH (3).webp",
            links: [
              { nodeId: "LDH (2)", position: { yaw: 4.485, pitch: -0.05 } },
              { nodeId: "LDH (4)", position: { yaw: 1.334, pitch: -0.05 } },
              { nodeId: "FCH (1)", position: { yaw: 2.913, pitch: -0.13 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-LDH (2)",
                position: { yaw: 4.485, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LDH (4)",
                position: { yaw: 1.334, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-FCH (1)",
                position: { yaw: 2.913, pitch: -0.13 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/FCH/FCH (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                            LDH (4)
                          =========== */
          {
            id: "LDH (4)",
            panorama: "./Images/WEST/Establishments/LDH/LDH (4).webp",
            links: [
              { nodeId: "LDH (3)", position: { yaw: 4.835, pitch: -0.06 } },
              { nodeId: "AL (1)", position: { yaw: 1.688, pitch: -0.1 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-LDH (3)",
                position: { yaw: 4.835, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (1)",
                position: { yaw: 1.688, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =======================
                       BAHAY PAG-ASA (BPA)
                     ======================= */
          {
            id: "BPA",
            panorama: "./Images/WEST/Establishments/BPA.webp",
            links: [
              { nodeId: "PA Road (2)", position: { yaw: 4.78, pitch: 0.04 } },
              { nodeId: "PA Road (3)", position: { yaw: 3.55, pitch: -0.12 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-PA Road (2)",
                position: { yaw: 4.78, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (2).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PA Road (3)",
                position: { yaw: 3.55, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Retreat & Conference Center (RCC)",
                style: { cursor: "pointer" },
              },
              {
                id: "BPA-info",
                position: { yaw: 0.185, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============================================================
                       COLLEGE OF BUSINESS ADMINISTRATION AND ACCOUNTANCY (CBAA)
                     =============================================================  */
          {
            id: "CBAA",
            panorama: "./Images/WEST/Establishments/CBAA.webp",
            links: [
              { nodeId: "MTH", position: { yaw: 8.034, pitch: -0.03 } },
              {
                nodeId: "West Avenue (9)",
                position: { yaw: 4.886, pitch: -0.02 },
              },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-MTH",
                position: { yaw: 8.034, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Establishments/MTH.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Mariano Trias Hall (MTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (9)",
                position: { yaw: 4.886, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/West Avenue/West Avenue (9).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "CBAA-info",
                position: { yaw: 3.088, pitch: 0 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============================================================
                       COLLEGE OF ENGINEERING, ARCHITECTURE AND TECHNOLOGY (CEAT)
                     =============================================================== */
          {
            id: "CEAT",
            panorama: "./Images/WEST/Establishments/CEAT.webp",
            links: [
              {
                nodeId: "West Avenue (6)",
                position: { yaw: 7.7, pitch: -0.02 },
              },
              {
                nodeId: "West Avenue (7)",
                position: { yaw: 4.71, pitch: -0.08 },
              },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-West Avenue (6)",
                position: { yaw: 7.7, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/West Avenue/West Avenue (6).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Vito Belarmino Hall (VBH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (7)",
                position: { yaw: 4.71, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/West Avenue/West Avenue (7).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Mariano Trias Hall (MTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "CEAT-info",
                position: { yaw: 3.09, pitch: -0.11 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============================
                       VITO BELARMINO HALL (VBH)
                     ============================= */
          {
            id: "VBH",
            panorama: "./Images/WEST/Establishments/VBH.webp",
            links: [
              {
                nodeId: "West Avenue (4)",
                position: { yaw: 5.917, pitch: -0.02 },
              },
              {
                nodeId: "West Avenue (5)",
                position: { yaw: 2.68, pitch: -0.04 },
              },
              { nodeId: "GMH Parking", position: { yaw: 4, pitch: -0.02 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-West Avenue (4)",
                position: { yaw: 5.917, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/West Avenue/West Avenue (4).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (5)",
                position: { yaw: 2.68, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/West Avenue/West Avenue (5).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-GMH Parking",
                position: { yaw: 4, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Parking Spaces/Parking (GMH)/GMH Parking.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "VBH-info",
                position: { yaw: 0.448, pitch: 0.03 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============================
                       MARIANO TRIAS HALL (MTH)
                     ============================ */
          {
            id: "MTH",
            panorama: "./Images/WEST/Establishments/MTH.webp",
            links: [
              {
                nodeId: "West Avenue (8)",
                position: { yaw: 2.824, pitch: -0.04 },
              },
              { nodeId: "CBAA", position: { yaw: 5.975, pitch: -0.03 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-West Avenue (8)",
                position: { yaw: 2.824, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/West Avenue/West Avenue (8).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CBAA",
                position: { yaw: 5.975, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Establishments/CBAA.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Business Administration and Accountancy (CBAA)",
                style: { cursor: "pointer" },
              },
              {
                id: "MTH-info",
                position: { yaw: 0.625, pitch: 0.04 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============================================
                       MARIANO TRIAS HALL COVERED COURT (MTH CC)
                     ============================================= */
          {
            id: "MTH (CC)",
            panorama: "./Images/WEST/Establishments/MTH (CC).webp",
            links: [
              {
                nodeId: "West Avenue (7)",
                position: { yaw: 5.3, pitch: -0.04 },
              },
              { nodeId: "AL (5)", position: { yaw: 2.75, pitch: -0.03 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-West Avenue (7)",
                position: { yaw: 5.3, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/West Avenue/West Avenue (7).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (5)",
                position: { yaw: 2.75, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Academy Lane/AL (5).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================================
                       OLYMPIC SIZE SWIMMING POOL (POOL)
                     ===================================== */
          {
            id: "Pool",
            panorama: "./Images/WEST/Establishments/Pool.webp",
            links: [
              {
                nodeId: "Oval Road (12)",
                position: { yaw: 1.528, pitch: -0.15 },
              },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-Oval Road (12)",
                position: { yaw: 1.528, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Oval Road/Oval Road (12).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
              {
                id: "Pool-info",
                position: { yaw: 4.13, pitch: -0.2 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================================
                       RETREAT & CONFERENCE CENTER (RCC)
                     ===================================== */
          {
            id: "RCC",
            panorama: "./Images/WEST/Establishments/RCC.webp",
            links: [
              {
                nodeId: "Oval Road (13)",
                position: { yaw: 0.987, pitch: 0.145 },
              },
              { nodeId: "PA Road (3)", position: { yaw: 4.3, pitch: -0.06 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-Oval Road (13)",
                position: { yaw: 0.987, pitch: 0.145 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Oval Road/Oval Road (13).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PA Road (3)",
                position: { yaw: 4.3, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (3).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Bahay Pag-Asa (BPA)",
                style: { cursor: "pointer" },
              },
              {
                id: "RCC-info",
                position: { yaw: 5.973, pitch: -0.07 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========================
                       UGNAYANG LA SALLE (ULS)
                     =========================== */
          {
            id: "ULS",
            panorama: "./Images/WEST/Establishments/ULS.webp",
            links: [
              {
                nodeId: "Oval Road (10)",
                position: { yaw: 4.37, pitch: -0.12 },
              },
              {
                nodeId: "Oval Road (11)",
                position: { yaw: 3.065, pitch: -0.15 },
              },
              {
                nodeId: "Oval Road (12)",
                position: { yaw: 1.76, pitch: -0.18 },
              },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-Oval Road (10)",
                position: { yaw: 4.37, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Oval Road/Oval Road (10).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (11)",
                position: { yaw: 3.065, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Oval Road/Oval Road (11).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (12)",
                position: { yaw: 1.76, pitch: -0.18 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Oval Road/Oval Road (12).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "ULS-info",
                position: { yaw: 6.192, pitch: -0.03 },
                html: `<div class="info-marker">
                                    <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                    </div>`,
                anchor: "center center",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========================================================================
               LANDMARKS (KEY FEATURES OF UD - NOT BUILDINGS BUT NOT ROADS EITHER) 
           =========================================================================== */

          /* ========
                       OVAL
                     ======== */

          /* ==============
                           OVAL (LEF)
                         ============== */
          {
            id: "Oval (Lef)",
            panorama: "./Images/WEST/Landmarks/Oval/Oval (Lef).webp",
            links: [
              { nodeId: "Oval (Mid)", position: { yaw: 6.965, pitch: -0.02 } },
              { nodeId: "PL (1)", position: { yaw: 4.67, pitch: 0 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval (Mid)",
                position: { yaw: 6.965, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Mid).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PL (1)",
                position: { yaw: 4.67, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Lane/PL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==============
                           OVAL (MID)
                         ============== */
          {
            id: "Oval (Mid)",
            panorama: "./Images/WEST/Landmarks/Oval/Oval (Mid).webp",
            links: [
              { nodeId: "Oval (Lef)", position: { yaw: 3.035, pitch: 0.01 } },
              { nodeId: "Oval (Rig)", position: { yaw: 6.188, pitch: 0.01 } },
              { nodeId: "Oval Road (3)", position: { yaw: 1.477, pitch: 0 } },
              { nodeId: "GS (1)", position: { yaw: 4.58, pitch: 0 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval (Lef)",
                position: { yaw: 3.035, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Lef).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval (Rig)",
                position: { yaw: 6.188, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Rig).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (3)",
                position: { yaw: 1.477, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-GS (1)",
                position: { yaw: 4.58, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/GS/GS (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "OVL-info",
                position: { yaw: 1.435, pitch: -0.2 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==============
                           OVAL (RIG)
                         ============== */
          {
            id: "Oval (Rig)",
            panorama: "./Images/WEST/Landmarks/Oval/Oval (Rig).webp",
            links: [
              { nodeId: "Oval (Mid)", position: { yaw: 6.23, pitch: -0.02 } },
              { nodeId: "RGD (3)", position: { yaw: 2.1, pitch: 0.01 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval (Mid)",
                position: { yaw: 6.23, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Mid).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (3)",
                position: { yaw: 2.1, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============
                       AMPITHEATER
                     =============== */
          {
            id: "Ampitheater",
            panorama: "./Images/WEST/Landmarks/Ampitheater.webp",
            links: [{ nodeId: "UEC", position: { yaw: 5.5, pitch: 0 } }],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-UEC",
                position: { yaw: 5.5, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Landmarks/UEC.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ======================
                       RESTING PLACE (RP)
                     ====================== */
          {
            id: "RP",
            panorama: "./Images/WEST/Landmarks/RP.webp",
            links: [{ nodeId: "UEC", position: { yaw: 6.1, pitch: -0.09 } }],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-UEC",
                position: { yaw: 6.1, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Landmarks/UEC.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================================
                       UNIVERSITY EVENTS CENTER (UEC)
                     ================================== */
          {
            id: "UEC",
            panorama: "./Images/WEST/Landmarks/UEC.webp",
            links: [
              { nodeId: "Oval Road (7)", position: { yaw: 4.8, pitch: 0.03 } },
              { nodeId: "RP", position: { yaw: 2.8, pitch: -0.04 } },
              { nodeId: "Ampitheater", position: { yaw: 0.78, pitch: -0.07 } },
            ],

            /* ============================= 
                                Markers in Gate 3
                        ================================ */

            markers: [
              {
                id: "go-to-Oval Road (7)",
                position: { yaw: 4.8, pitch: 0.03 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Oval Road/Oval Road (7).webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RP",
                position: { yaw: 2.8, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Landmarks/RP.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Resting Place (RP)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Ampitheater",
                position: { yaw: 0.78, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                    <div class="pulse-container">
                                        <div class="pulse1"></div>
                                        <div class="pulse2"></div>
                                        <div class="pulse3"></div>
                                    </div>
                                    <img src="./Images/WEST/Markers/Landmarks/Ampitheater.webp" alt="marker image" />
                                    </div>`,
                anchor: "center center",
                tooltip: "To Ampitheater",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ========================================
                     PATHWAYS AND ROADS 
           ======================================== */

          /* =================
                       ACACIA AVENUE
                     ================= */

          /* =====================
                           ACACIA AVENUE (1)
                         ===================== */
          {
            id: "Acacia Avenue (1)",
            panorama: "./Images/WEST/Acacia Avenue/Acacia Avenue (1).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (8)",
                position: { yaw: 2.9, pitch: -0.03 },
              },
              {
                nodeId: "Acacia Avenue (2)",
                position: { yaw: 12.5, pitch: -0.05 },
              },
              {
                nodeId: "PCCA Parking (1)",
                position: { yaw: 1.37, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PC Campos Avenue (8)",
                position: { yaw: 2.9, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (2)",
                position: { yaw: 12.5, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PCCA Parking (1)",
                position: { yaw: 1.37, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "FBH-info",
                position: { yaw: 3.6, pitch: -0.02 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================
                           ACACIA AVENUE (2)
                         ===================== */
          {
            id: "Acacia Avenue (2)",
            panorama: "./Images/WEST/Acacia Avenue/Acacia Avenue (2).webp",
            links: [
              {
                nodeId: "Acacia Avenue (1)",
                position: { yaw: 3.61, pitch: 0.02 },
              },
              {
                nodeId: "Acacia Avenue (3)",
                position: { yaw: 0.795, pitch: -0.07 },
              },
              {
                nodeId: "PCCA Parking (2)",
                position: { yaw: 2.25, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Acacia Avenue (1)",
                position: { yaw: 3.61, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (3)",
                position: { yaw: 0.795, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PCCA Parking (2)",
                position: { yaw: 2.25, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================
                           ACACIA AVENUE (3)
                         ===================== */
          {
            id: "Acacia Avenue (3)",
            panorama: "./Images/WEST/Acacia Avenue/Acacia Avenue (3).webp",
            links: [
              {
                nodeId: "Acacia Avenue (2)",
                position: { yaw: 5.095, pitch: 0.01 },
              },
              {
                nodeId: "Acacia Avenue (4)",
                position: { yaw: 1.68, pitch: -0.04 },
              },
              {
                nodeId: "PCCA Parking (3)",
                position: { yaw: 4.1, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Acacia Avenue (2)",
                position: { yaw: 5.095, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (4)",
                position: { yaw: 1.68, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PCCA Parking (3)",
                position: { yaw: 4.1, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================
                           ACACIA AVENUE (4)
                         ===================== */
          {
            id: "Acacia Avenue (4)",
            panorama: "./Images/WEST/Acacia Avenue/Acacia Avenue (4).webp",
            links: [
              {
                nodeId: "Acacia Avenue (3)",
                position: { yaw: 5.2, pitch: 0.01 },
              },
              {
                nodeId: "Acacia Avenue (5)",
                position: { yaw: 1.755, pitch: -0.01 },
              },
              { nodeId: "AL (5)", position: { yaw: 6.36, pitch: 0 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Acacia Avenue (3)",
                position: { yaw: 5.2, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (5)",
                position: { yaw: 1.755, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (5)",
                position: { yaw: 6.36, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "KND-info",
                position: { yaw: 3.512, pitch: -0.12 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================
                           ACACIA AVENUE (5)
                         ===================== */
          {
            id: "Acacia Avenue (5)",
            panorama: "./Images/WEST/Acacia Avenue/Acacia Avenue (5).webp",
            links: [
              {
                nodeId: "Acacia Avenue (4)",
                position: { yaw: 5.057, pitch: 0.01 },
              },
              {
                nodeId: "Acacia Avenue (6)",
                position: { yaw: 1.86, pitch: -0.03 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Acacia Avenue (4)",
                position: { yaw: 5.057, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (6)",
                position: { yaw: 1.86, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =====================
                           ACACIA AVENUE (6)
                         ===================== */
          {
            id: "Acacia Avenue (6)",
            panorama: "./Images/WEST/Acacia Avenue/Acacia Avenue (6).webp",
            links: [
              {
                nodeId: "Acacia Avenue (5)",
                position: { yaw: 1.53, pitch: -0.03 },
              },
              { nodeId: "West Avenue (12)", position: { yaw: 4.77, pitch: 0 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Acacia Avenue (5)",
                position: { yaw: 1.533, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (12)",
                position: { yaw: 4.77, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (12).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================
                       ACADEMY LANE
                     ================ */

          /* ==========
                           AL (1)
                         ========== */
          {
            id: "AL (1)",
            panorama: "./Images/WEST/Academy Lane/AL (1).webp",
            links: [
              { nodeId: "LDH (4)", position: { yaw: 2.67, pitch: -0.08 } },
              { nodeId: "FCH (2)", position: { yaw: 1.13, pitch: -0.15 } },
              { nodeId: "AL (2)", position: { yaw: 5.845, pitch: -0.09 } },
              { nodeId: "GMH Parking", position: { yaw: 4.45, pitch: -0.09 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-LDH (4)",
                position: { yaw: 2.67, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/LDH/LDH (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-FCH (2)",
                position: { yaw: 1.13, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/FCH/FCH (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (2)",
                position: { yaw: 5.845, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-GMH Parking",
                position: { yaw: 4.45, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (GMH)/GMH Parking.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "LDH-info",
                position: { yaw: 3.18, pitch: 0 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (2)
                         ========== */
          {
            id: "AL (2)",
            panorama: "./Images/WEST/Academy Lane/AL (2).webp",
            links: [
              { nodeId: "AL (1)", position: { yaw: 1.57, pitch: -0.05 } },
              { nodeId: "AL (3)", position: { yaw: 4.705, pitch: -0.15 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (1)",
                position: { yaw: 1.57, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (3)",
                position: { yaw: 4.705, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Felipe Calderon Hall (FCH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (3)
                         ========== */
          {
            id: "AL (3)",
            panorama: "./Images/WEST/Academy Lane/AL (3).webp",
            links: [
              { nodeId: "AL (2)", position: { yaw: 4.636, pitch: -0.02 } },
              { nodeId: "CTH", position: { yaw: 2.97, pitch: -0.03 } },
              { nodeId: "AL (4)", position: { yaw: 1.532, pitch: -0.07 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (2)",
                position: { yaw: 4.636, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CTH",
                position: { yaw: 2.97, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/CTH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (4)",
                position: { yaw: 1.532, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/Al (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "GMH-info",
                position: { yaw: 6.153, pitch: 0 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (4)
                         ========== */
          {
            id: "AL (4)",
            panorama: "./Images/WEST/Academy Lane/AL (4).webp",
            links: [
              { nodeId: "AL (3)", position: { yaw: 2.41, pitch: 0 } },
              { nodeId: "AL (5)", position: { yaw: 5.518, pitch: -0.17 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (3)",
                position: { yaw: 2.41, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (5)",
                position: { yaw: 5.518, pitch: -0.17 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (5)
                         ========== */
          {
            id: "AL (5)",
            panorama: "./Images/WEST/Academy Lane/AL (5).webp",
            links: [
              { nodeId: "AL (4)", position: { yaw: 4.16, pitch: -0.03 } },
              { nodeId: "AL (6)", position: { yaw: 7.265, pitch: -0.07 } },
              {
                nodeId: "Acacia Avenue (4)",
                position: { yaw: 2.49, pitch: -0.1 },
              },
              { nodeId: "MTH (CC)", position: { yaw: 5.83, pitch: -0.05 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (4)",
                position: { yaw: 4.16, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (6)",
                position: { yaw: 7.265, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (4)",
                position: { yaw: 2.49, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-MTH (CC)",
                position: { yaw: 5.83, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/MTH (CC).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mariano Trias Hall Covered Court (MTH-CC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (6)
                         ========== */
          {
            id: "AL (6)",
            panorama: "./Images/WEST/Academy Lane/AL (6).webp",
            links: [
              { nodeId: "AL (5)", position: { yaw: 1.426, pitch: -0.02 } },
              { nodeId: "AL (7)", position: { yaw: 3.025, pitch: -0.12 } },
              { nodeId: "AL (8)", position: { yaw: 4.37, pitch: -0.13 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (5)",
                position: { yaw: 1.426, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gregoria Montoya Hall (GMH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (7)",
                position: { yaw: 3.025, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (8)",
                position: { yaw: 4.37, pitch: -0.13 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (7)
                         ========== */
          {
            id: "AL (7)",
            panorama: "./Images/WEST/Academy Lane/AL (7).webp",
            links: [
              { nodeId: "AL (6)", position: { yaw: 2.495, pitch: -0.13 } },
              { nodeId: "AL (8)", position: { yaw: 7.18, pitch: -0.09 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (6)",
                position: { yaw: 2.495, pitch: -0.13 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (8)",
                position: { yaw: 7.18, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (8)
                         ========== */
          {
            id: "AL (8)",
            panorama: "./Images/WEST/Academy Lane/AL (8).webp",
            links: [
              { nodeId: "AL (7)", position: { yaw: 4.395, pitch: -0.08 } },
              { nodeId: "AL (9)", position: { yaw: 1.195, pitch: -0.07 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (7)",
                position: { yaw: 4.395, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (9)",
                position: { yaw: 1.195, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           AL (9)
                         ========== */
          {
            id: "AL (9)",
            panorama: "./Images/WEST/Academy Lane/AL (9).webp",
            links: [
              { nodeId: "AL (8)", position: { yaw: 4.645, pitch: -0.05 } },
              { nodeId: "AL (10)", position: { yaw: 7.37, pitch: 0.04 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (8)",
                position: { yaw: 4.645, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (10)",
                position: { yaw: 7.37, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                           AL (10)
                         =========== */
          {
            id: "AL (10)",
            panorama: "./Images/WEST/Academy Lane/AL (10).webp",
            links: [
              { nodeId: "AL (9)", position: { yaw: 3.88, pitch: -0.05 } },
              { nodeId: "AL (11)", position: { yaw: 7.53, pitch: -0.06 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (9)",
                position: { yaw: 3.88, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (11)",
                position: { yaw: 7.53, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                           AL (11)
                         =========== */
          {
            id: "AL (11)",
            panorama: "./Images/WEST/Academy Lane/AL (11).webp",
            links: [
              { nodeId: "AL (10)", position: { yaw: 4.33, pitch: -0.02 } },
              {
                nodeId: "West Avenue (11)",
                position: { yaw: 7.321, pitch: -0.09 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-AL (10)",
                position: { yaw: 4.33, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (11)",
                position: { yaw: 7.321, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ============
                       DLSUD-HS
                     ============ */

          /* ==========
                           HS (1)
                         ========== */
          {
            id: "HS (1)",
            panorama: "./Images/WEST/DLSUD-HS/HS (1).webp",
            links: [
              { nodeId: "Oval Road (5)", position: { yaw: 7.35, pitch: 0.05 } },
              { nodeId: "HS (2)", position: { yaw: 5.5, pitch: -0.04 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (5)",
                position: { yaw: 7.35, pitch: 0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-HS (2)",
                position: { yaw: 5.5, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/DLSUD-HS/HS (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==========
                           HS (2)
                         ========== */
          {
            id: "HS (2)",
            panorama: "./Images/WEST/DLSUD-HS/HS (2).webp",
            links: [
              { nodeId: "Oval Road (4)", position: { yaw: 0.83, pitch: 0.04 } },
              { nodeId: "HS (1)", position: { yaw: 2.54, pitch: -0.03 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (4)",
                position: { yaw: 0.83, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval Road",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-HS (1)",
                position: { yaw: 2.54, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/DLSUD-HS/HS (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "HS-info",
                position: { yaw: 4.129, pitch: -0.16 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* =============
                       OVAL ROAD
                     ============= */

          /* =================
                           OVAL ROAD (1)
                         ================= */
          {
            id: "Oval Road (1)",
            panorama: "./Images/WEST/Oval Road/Oval Road (1).webp",
            links: [
              {
                nodeId: "West Avenue (12)",
                position: { yaw: 7.18, pitch: 0.025 },
              },
              {
                nodeId: "Oval Road (2)",
                position: { yaw: 3.71, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-West Avenue (12)",
                position: { yaw: 7.18, pitch: 0.025 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (12).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (2)",
                position: { yaw: 3.71, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (2)
                         ================= */
          {
            id: "Oval Road (2)",
            panorama: "./Images/WEST/Oval Road/Oval Road (2).webp",
            links: [
              { nodeId: "Oval Road (1)", position: { yaw: 6.85, pitch: 0 } },
              { nodeId: "Oval Road (3)", position: { yaw: 3.615, pitch: 0 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (1)",
                position: { yaw: 6.85, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (3)",
                position: { yaw: 3.615, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (3)
                         ================= */
          {
            id: "Oval Road (3)",
            panorama: "./Images/WEST/Oval Road/Oval Road (3).webp",
            links: [
              { nodeId: "Oval Road (2)", position: { yaw: 3.807, pitch: 0 } },
              { nodeId: "Oval Road (4)", position: { yaw: 6.925, pitch: 0 } },
              { nodeId: "Oval (Mid)", position: { yaw: 5.375, pitch: -0.04 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (2)",
                position: { yaw: 3.807, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (4)",
                position: { yaw: 6.925, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval (Mid)",
                position: { yaw: 5.375, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Mid).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (4)
                         ================= */
          {
            id: "Oval Road (4)",
            panorama: "./Images/WEST/Oval Road/Oval Road (4).webp",
            links: [
              {
                nodeId: "Oval Road (3)",
                position: { yaw: 6.795, pitch: -0.02 },
              },
              { nodeId: "Oval Road (5)", position: { yaw: 3.64, pitch: 0 } },
              { nodeId: "HS (2)", position: { yaw: 5.2, pitch: -0.12 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (3)",
                position: { yaw: 6.795, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (5)",
                position: { yaw: 3.64, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-HS (2)",
                position: { yaw: 5.2, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/DLSUD-HS/HS (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (5)
                         ================= */
          {
            id: "Oval Road (5)",
            panorama: "./Images/WEST/Oval Road/Oval Road (5).webp",
            links: [
              {
                nodeId: "Oval Road (4)",
                position: { yaw: 2.468, pitch: -0.02 },
              },
              {
                nodeId: "Oval Road (6)",
                position: { yaw: 5.618, pitch: -0.1 },
              },
              { nodeId: "HS (1)", position: { yaw: 1, pitch: -0.12 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (4)",
                position: { yaw: 2.468, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (4).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (6)",
                position: { yaw: 5.618, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-HS (1)",
                position: { yaw: 1, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/DLSUD-HS/HS (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (6)
                         ================= */
          {
            id: "Oval Road (6)",
            panorama: "./Images/WEST/Oval Road/Oval Road (6).webp",
            links: [
              {
                nodeId: "Oval Road (5)",
                position: { yaw: 7.564, pitch: -0.09 },
              },
              {
                nodeId: "Oval Road (7)",
                position: { yaw: 4.377, pitch: -0.08 },
              },
              {
                nodeId: "OU Parking (1)",
                position: { yaw: 3.15, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (5)",
                position: { yaw: 7.564, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (7)",
                position: { yaw: 4.377, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-OU Parking (1)",
                position: { yaw: 3.15, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (OVL & ULS)/OU Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (7)
                         ================= */
          {
            id: "Oval Road (7)",
            panorama: "./Images/WEST/Oval Road/Oval Road (7).webp",
            links: [
              {
                nodeId: "Oval Road (6)",
                position: { yaw: 3.775, pitch: -0.04 },
              },
              {
                nodeId: "Oval Road (8)",
                position: { yaw: 6.915, pitch: -0.04 },
              },
              { nodeId: "UEC", position: { yaw: 2.4, pitch: -0.2 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (6)",
                position: { yaw: 3.775, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (8)",
                position: { yaw: 6.915, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-UEC",
                position: { yaw: 2.4, pitch: -0.2 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/UEC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Events Center (UEC)",
                style: { cursor: "pointer" },
              },
              {
                id: "UEC-info",
                position: { yaw: 2.985, pitch: -0.139 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (8)
                         ================= */
          {
            id: "Oval Road (8)",
            panorama: "./Images/WEST/Oval Road/Oval Road (8).webp",
            links: [
              {
                nodeId: "Oval Road (7)",
                position: { yaw: 3.81, pitch: -0.01 },
              },
              {
                nodeId: "Oval Road (9)",
                position: { yaw: 6.78, pitch: -0.05 },
              },
              { nodeId: "OU Parking (2)", position: { yaw: 5.2, pitch: 0.02 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (7)",
                position: { yaw: 3.81, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (9)",
                position: { yaw: 6.78, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-OU Parking (2)",
                position: { yaw: 5.2, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (OVL & ULS)/OU Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                           OVAL ROAD (9)
                         ================= */
          {
            id: "Oval Road (9)",
            panorama: "./Images/WEST/Oval Road/Oval Road (9).webp",
            links: [
              { nodeId: "Oval Road (8)", position: { yaw: 6.76, pitch: 0.03 } },
              {
                nodeId: "Oval Road (10)",
                position: { yaw: 3.45, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (8)",
                position: { yaw: 6.76, pitch: 0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (10)",
                position: { yaw: 3.45, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           OVAL ROAD (10)
                         ================== */
          {
            id: "Oval Road (10)",
            panorama: "./Images/WEST/Oval Road/Oval Road (10).webp",
            links: [
              { nodeId: "Oval Road (9)", position: { yaw: 5.766, pitch: 0 } },
              {
                nodeId: "Oval Road (11)",
                position: { yaw: 1.6, pitch: -0.07 },
              },
              {
                nodeId: "ULS Parking (1)",
                position: { yaw: 2.77, pitch: -0.07 },
              },
              { nodeId: "ULS", position: { yaw: 6.885, pitch: 0.03 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (9)",
                position: { yaw: 5.766, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (11)",
                position: { yaw: 1.6, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ULS Parking (1)",
                position: { yaw: 2.77, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (ULS)/ULS Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ULS",
                position: { yaw: 6.885, pitch: 0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/ULS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           OVAL ROAD (11)
                         ================== */
          {
            id: "Oval Road (11)",
            panorama: "./Images/WEST/Oval Road/Oval Road (11).webp",
            links: [
              { nodeId: "Oval Road (10)", position: { yaw: 7, pitch: 0 } },
              {
                nodeId: "Oval Road (12)",
                position: { yaw: 3.7, pitch: -0.13 },
              },
              { nodeId: "ULS", position: { yaw: 2.165, pitch: 0.05 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (10)",
                position: { yaw: 7, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (12)",
                position: { yaw: 3.7, pitch: -0.13 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (12).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Gate 3",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ULS",
                position: { yaw: 2.165, pitch: 0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/ULS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           OVAL ROAD (12)
                         ================== */
          {
            id: "Oval Road (12)",
            panorama: "./Images/WEST/Oval Road/Oval Road (12).webp",
            links: [
              {
                nodeId: "Oval Road (11)",
                position: { yaw: 4.32, pitch: 0.04 },
              },
              {
                nodeId: "Oval Road (13)",
                position: { yaw: 2.14, pitch: -0.15 },
              },
              { nodeId: "ULS", position: { yaw: 5.28, pitch: 0.125 } },
              { nodeId: "Pool", position: { yaw: 7.33, pitch: -0.18 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (11)",
                position: { yaw: 4.32, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (13)",
                position: { yaw: 2.14, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (13).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-ULS",
                position: { yaw: 5.28, pitch: 0.125 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/ULS.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Pool",
                position: { yaw: 7.33, pitch: -0.18 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/Pool.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Pool",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           OVAL ROAD (13)
                         ================== */
          {
            id: "Oval Road (13)",
            panorama: "./Images/WEST/Oval Road/Oval Road (13).webp",
            links: [
              {
                nodeId: "Oval Road (12)",
                position: { yaw: 6.55, pitch: 0.04 },
              },
              {
                nodeId: "Oval Road (14)",
                position: { yaw: 4.46, pitch: -0.1 },
              },
              { nodeId: "RCC", position: { yaw: 2.15, pitch: -0.16 } },
              { nodeId: "PA Road (1)", position: { yaw: 1.55, pitch: -0.06 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (12)",
                position: { yaw: 6.55, pitch: 0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (12).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (14)",
                position: { yaw: 4.46, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (14).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RCC",
                position: { yaw: 2.15, pitch: -0.16 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/RCC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Retreat & Conference Center (RCC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PA Road (1)",
                position: { yaw: 1.55, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Bahay Pag-Asa (BPA)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           OVAL ROAD (14)
                         ================== */
          {
            id: "Oval Road (14)",
            panorama: "./Images/WEST/Oval Road/Oval Road (14).webp",
            links: [
              {
                nodeId: "Oval Road (13)",
                position: { yaw: 7.17, pitch: 0.11 },
              },
              { nodeId: "Rotunda", position: { yaw: 4.035, pitch: -0.02 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (13)",
                position: { yaw: 7.17, pitch: 0.11 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (13).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Rotunda",
                position: { yaw: 4.035, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Rotunda/Rotunda.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "Rotunda",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================
                       PAG-ASA ROAD
                     ================ */

          /* ====================
                           PAG-ASA ROAD (1)
                         ==================== */
          {
            id: "PA Road (1)",
            panorama: "./Images/WEST/Pag-Asa Road/PA Road (1).webp",
            links: [
              {
                nodeId: "Oval Road (13)",
                position: { yaw: 5.29, pitch: -0.02 },
              },
              { nodeId: "PA Road (2)", position: { yaw: 1.97, pitch: -0.08 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (13)",
                position: { yaw: 1.7, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (13).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PA Road (2)",
                position: { yaw: 4.78, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Bahay Pag-Asa (BPA)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                           PAG-ASA ROAD (2)
                         ==================== */
          {
            id: "PA Road (2)",
            panorama: "./Images/WEST/Pag-Asa Road/PA Road (2).webp",
            links: [
              { nodeId: "PA Road (1)", position: { yaw: 7.8, pitch: 0 } },
              { nodeId: "PA Road (3)", position: { yaw: 5.87, pitch: -0.175 } },
              { nodeId: "RGD (6)", position: { yaw: 3.514, pitch: 0.03 } },
              { nodeId: "BPA", position: { yaw: 4.85, pitch: -0.07 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PA Road (1)",
                position: { yaw: 7.8, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PA Road (3)",
                position: { yaw: 5.87, pitch: -0.175 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Retreat & Conference Center (RCC)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (6)",
                position: { yaw: 3.514, pitch: 0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-BPA",
                position: { yaw: 4.85, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/BPA.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Bahay Pag-Asa (BPA)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                           PAG-ASA ROAD (3)
                         ==================== */
          {
            id: "PA Road (3)",
            panorama: "./Images/WEST/Pag-Asa Road/PA Road (3).webp",
            links: [
              { nodeId: "PA Road (1)", position: { yaw: 8.3, pitch: 0.12 } },
              { nodeId: "BPA", position: { yaw: 3.34, pitch: 0.05 } },
              { nodeId: "RCC", position: { yaw: 7.55, pitch: -0.03 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PA Road (2)",
                position: { yaw: 8.3, pitch: 0.12 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-BPA",
                position: { yaw: 3.34, pitch: 0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/BPA.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Bahay Pag-Asa (BPA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RCC",
                position: { yaw: 7.55, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/RCC.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Retreat & Conference Center (RCC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================
                       PARKING LANE
                     ================ */

          /* ==========
                           PL (1)
                         ========== */
          {
            id: "PL (1)",
            panorama: "./Images/WEST/Parking Lane/PL (1).webp",
            links: [
              {
                nodeId: "West Avenue (9)",
                position: { yaw: 5.29, pitch: -0.02 },
              },
              { nodeId: "Oval (Lef)", position: { yaw: 1.97, pitch: -0.08 } },
              {
                nodeId: "CM Parking (2)",
                position: { yaw: 4.2, pitch: -0.05 },
              },
              {
                nodeId: "CM Parking (3)",
                position: { yaw: 1.25, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-West Avenue (9)",
                position: { yaw: 5.29, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Business Administration and Accountancy (CBAA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval (Lef)",
                position: { yaw: 1.97, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Lef).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CM Parking (2)",
                position: { yaw: 4.2, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (CBAA & MTH)/CM Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CM Parking (3)",
                position: { yaw: 1.25, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (CBAA & MTH)/CM Parking (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===============
                       WEST AVENUE
                     =============== */

          /* ===================
                           WEST AVENUE (4)
                         =================== */
          {
            id: "West Avenue (4)",
            panorama: "./Images/WEST/West Avenue/West Avenue (4).webp",
            links: [
              {
                nodeId: "West Avenue (3)",
                position: { yaw: 6.013, pitch: -0.01 },
              },
              { nodeId: "VBH", position: { yaw: 2.915, pitch: -0.01 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-West Avenue (3)",
                position: { yaw: 6.013, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/West Avenue/West Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-VBH",
                position: { yaw: 2.915, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/VBH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Vito Belarmino Hall (VBH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           WEST AVENUE (5)
                         =================== */
          {
            id: "West Avenue (5)",
            panorama: "./Images/WEST/West Avenue/West Avenue (5).webp",
            links: [
              { nodeId: "VBH", position: { yaw: 4.99, pitch: -0.01 } },
              {
                nodeId: "West Avenue (6)",
                position: { yaw: 1.6, pitch: -0.03 },
              },
              { nodeId: "GMH Parking", position: { yaw: 3.85, pitch: 0 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-VBH",
                position: { yaw: 4.99, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/VBH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Vito Belarmino Hall (VBH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (6)",
                position: { yaw: 1.6, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-GMH Parking",
                position: { yaw: 3.85, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (GMH)/GMH Parking.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           WEST AVENUE (6)
                         =================== */
          {
            id: "West Avenue (6)",
            panorama: "./Images/WEST/West Avenue/West Avenue (6).webp",
            links: [
              { nodeId: "CEAT", position: { yaw: 3.65, pitch: -0.04 } },
              {
                nodeId: "West Avenue (5)",
                position: { yaw: 6.25, pitch: -0.02 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-CEAT",
                position: { yaw: 3.65, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/CEAT.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (5)",
                position: { yaw: 6.25, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Vito Belarmino Hall (VBH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           WEST AVENUE (7)
                         =================== */
          {
            id: "West Avenue (7)",
            panorama: "./Images/WEST/West Avenue/West Avenue (7).webp",
            links: [
              {
                nodeId: "West Avenue (8)",
                position: { yaw: 4.17, pitch: -0.05 },
              },
              { nodeId: "CEAT", position: { yaw: 7.12, pitch: 0.07 } },
              { nodeId: "MTH (CC)", position: { yaw: 5.65, pitch: -0.07 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-West Avenue (8)",
                position: { yaw: 4.17, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mariano Trias Hall (MTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CEAT",
                position: { yaw: 7.12, pitch: 0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/CEAT.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-MTH (CC)",
                position: { yaw: 5.65, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/MTH (CC).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mariano Trias Hall Covered Court (MTH-CC)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           WEST AVENUE (8)
                         =================== */
          {
            id: "West Avenue (8)",
            panorama: "./Images/WEST/West Avenue/West Avenue (8).webp",
            links: [
              { nodeId: "MTH", position: { yaw: 3.225, pitch: -0.04 } },
              {
                nodeId: "West Avenue (7)",
                position: { yaw: 6.185, pitch: -0.04 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-MTH",
                position: { yaw: 3.225, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/MTH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Mariano Trias Hall (MTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (7)",
                position: { yaw: 6.185, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "SAH-info",
                position: { yaw: 0.98, pitch: -0.03 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                           WEST AVENUE (9)
                         =================== */
          {
            id: "West Avenue (9)",
            panorama: "./Images/WEST/West Avenue/West Avenue (9).webp",
            links: [
              { nodeId: "CBAA", position: { yaw: 2.714, pitch: -0.04 } },
              {
                nodeId: "West Avenue (10)",
                position: { yaw: 7.136, pitch: -0.07 },
              },
              { nodeId: "PL (1)", position: { yaw: 5.1, pitch: -0.095 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-CBAA",
                position: { yaw: 2.714, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/CBAA.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Business Administration and Accountancy (CBAA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (10)",
                position: { yaw: 7.136, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PL (1)",
                position: { yaw: 5.1, pitch: -0.095 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Lane/PL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                           WEST AVENUE (10)
                         ==================== */
          {
            id: "West Avenue (10)",
            panorama: "./Images/WEST/West Avenue/West Avenue (10).webp",
            links: [
              {
                nodeId: "West Avenue (9)",
                position: { yaw: 1.97, pitch: -0.04 },
              },
              {
                nodeId: "West Avenue (11)",
                position: { yaw: 5.124, pitch: -0.1 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-West Avenue (9)",
                position: { yaw: 1.97, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (9).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Business Administration and Accountancy (CBAA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (11)",
                position: { yaw: 5.124, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                           WEST AVENUE (11)
                         ==================== */
          {
            id: "West Avenue (11)",
            panorama: "./Images/WEST/West Avenue/West Avenue (11).webp",
            links: [
              {
                nodeId: "West Avenue (10)",
                position: { yaw: 6.75, pitch: -0.07 },
              },
              {
                nodeId: "West Avenue (12)",
                position: { yaw: 3.655, pitch: -0.15 },
              },
              { nodeId: "AL (11)", position: { yaw: 5.17, pitch: -0.06 } },
              {
                nodeId: "CM Parking (1)",
                position: { yaw: 2.05, pitch: -0.09 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-West Avenue (10)",
                position: { yaw: 6.75, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Business Administration and Accountancy (CBAA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (12)",
                position: { yaw: 3.655, pitch: -0.15 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (12).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (11)",
                position: { yaw: 5.17, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Candido Tirona Hall (CTH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CM Parking (1)",
                position: { yaw: 2.05, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (CBAA & MTH)/CM Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                           WEST AVENUE (12)
                         ==================== */
          {
            id: "West Avenue (12)",
            panorama: "./Images/WEST/West Avenue/West Avenue (12).webp",
            links: [
              {
                nodeId: "Acacia Avenue (6)",
                position: { yaw: 5.01, pitch: -0.04 },
              },
              {
                nodeId: "West Avenue (11)",
                position: { yaw: 0.573, pitch: -0.06 },
              },
              {
                nodeId: "Oval Road (1)",
                position: { yaw: 2.63, pitch: -0.05 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Acacia Avenue (6)",
                position: { yaw: 5.01, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (11)",
                position: { yaw: 0.573, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Business Administration and Accountancy (CBAA)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (1)",
                position: { yaw: 2.63, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
              {
                id: "SEC-info",
                position: { yaw: 3.5, pitch: -0.1 },
                html: `<div class="info-marker">
                                        <img src="./Images/INFO/Info.png" alt="Info Marker" />
                                        </div>`,
                anchor: "center center",

                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================
                       GRANDSTAND DRIVE
                     ==================== */

          /* ========
                           LEFT
                         ======== */

          /* ===========
                               LGD (1)
                             =========== */
          {
            id: "LGD (1)",
            panorama: "./Images/WEST/Grandstand Drive/Left/LGD (1).webp",
            links: [
              { nodeId: "GS (1)", position: { yaw: 4.97, pitch: -0.01 } },
              { nodeId: "LGD (2)", position: { yaw: 2, pitch: -0.02 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-GS (1)",
                position: { yaw: 4.97, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Establishments/GS/GS (1).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LGD (2)",
                position: { yaw: 2, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Left/LGD (2).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                               LGD (2)
                             =========== */
          {
            id: "LGD (2)",
            panorama: "./Images/WEST/Grandstand Drive/Left/LGD (2).webp",
            links: [
              { nodeId: "LGD (1)", position: { yaw: 4.23, pitch: -0.02 } },
              { nodeId: "LGD (3)", position: { yaw: 0.7, pitch: -0.04 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-LGD (1)",
                position: { yaw: 4.23, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Left/LGD (1).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LGD (3)",
                position: { yaw: 0.7, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Left/LGD (3).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                               LGD (3)
                             =========== */
          {
            id: "LGD (3)",
            panorama: "./Images/WEST/Grandstand Drive/Left/LGD (3).webp",
            links: [
              { nodeId: "CM Parking (3)", position: { yaw: 6.62, pitch: 0 } },
              { nodeId: "LGD (2)", position: { yaw: 4.12, pitch: -0.06 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-CM Parking (3)",
                position: { yaw: 6.62, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Parking Spaces/Parking (CBAA & MTH)/CM Parking (3).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-LGD (2)",
                position: { yaw: 4.12, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Left/LGD (2).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =========
                           RIGHT
                         ========= */

          /* ===========
                               RGD (1)
                             =========== */
          {
            id: "RGD (1)",
            panorama: "./Images/WEST/Grandstand Drive/Right/RGD (1).webp",
            links: [
              { nodeId: "GS (1)", position: { yaw: 3.07, pitch: 0 } },
              { nodeId: "GS Parking", position: { yaw: 6.2, pitch: -0.06 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-GS (1)",
                position: { yaw: 3.07, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Establishments/GS/GS (1).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-GS Parking",
                position: { yaw: 6.2, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Parking Spaces/Parking (GS)/GS Parking.webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                               RGD (2)
                             =========== */
          {
            id: "RGD (2)",
            panorama: "./Images/WEST/Grandstand Drive/Right/RGD (2).webp",
            links: [
              { nodeId: "GS Parking", position: { yaw: 0.73, pitch: -0.01 } },
              { nodeId: "RGD (3)", position: { yaw: 4.9, pitch: -0.05 } },
              { nodeId: "RGD (4)", position: { yaw: 3.445, pitch: -0.12 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-GS Parking",
                position: { yaw: 0.73, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Parking Spaces/Parking (GS)/GS Parking.webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (3)",
                position: { yaw: 4.9, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (3).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (4)",
                position: { yaw: 3.445, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (4).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                               RGD (3)
                             =========== */
          {
            id: "RGD (3)",
            panorama: "./Images/WEST/Grandstand Drive/Right/RGD (3).webp",
            links: [
              { nodeId: "Oval (Rig)", position: { yaw: 2.5, pitch: -0.02 } },
              { nodeId: "RGD (2)", position: { yaw: 3.45, pitch: -0.06 } },
              { nodeId: "RGD (4)", position: { yaw: 4.45, pitch: -0.08 } },
              {
                nodeId: "OU Parking (1)",
                position: { yaw: 1.12, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-Oval (Rig)",
                position: { yaw: 2.5, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Rig).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (2)",
                position: { yaw: 3.45, pitch: -0.06 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (2).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (4)",
                position: { yaw: 4.45, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (4).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-OU Parking (1)",
                position: { yaw: 1.12, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Parking Spaces/Parking (OVL & ULS)/OU Parking (1).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                               RGD (4)
                             =========== */
          {
            id: "RGD (4)",
            panorama: "./Images/WEST/Grandstand Drive/Right/RGD (4).webp",
            links: [
              { nodeId: "RGD (2)", position: { yaw: 3.25, pitch: -0.02 } },
              { nodeId: "RGD (3)", position: { yaw: 2.2, pitch: -0.01 } },
              { nodeId: "RGD (5)", position: { yaw: 6.225, pitch: -0.12 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-RGD (2)",
                position: { yaw: 3.25, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (2).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (3)",
                position: { yaw: 2.2, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (3).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (5)",
                position: { yaw: 6.225, pitch: -0.12 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (5).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                               RGD (5)
                             =========== */
          {
            id: "RGD (5)",
            panorama: "./Images/WEST/Grandstand Drive/Right/RGD (5).webp",
            links: [
              { nodeId: "RGD (4)", position: { yaw: 2.588, pitch: 0.085 } },
              { nodeId: "RGD (6)", position: { yaw: 6.175, pitch: -0.07 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-RGD (4)",
                position: { yaw: 2.588, pitch: 0.085 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (4).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (6)",
                position: { yaw: 6.175, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (6).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Gate 3",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===========
                               RGD (6)
                             =========== */
          {
            id: "RGD (6)",
            panorama: "./Images/WEST/Grandstand Drive/Right/RGD (6).webp",
            links: [
              { nodeId: "RGD (5)", position: { yaw: 2.565, pitch: 0.02 } },
              { nodeId: "PA Road (2)", position: { yaw: 5.69, pitch: -0.04 } },
            ],

            /* ============================= 
                                        Markers in Gate 3
                                ================================ */

            markers: [
              {
                id: "go-to-RGD (5)",
                position: { yaw: 2.565, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (5).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PA Road (2)",
                position: { yaw: 5.69, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                            <div class="pulse-container">
                                                <div class="pulse1"></div>
                                                <div class="pulse2"></div>
                                                <div class="pulse3"></div>
                                            </div>
                                            <img src="./Images/WEST/Markers/Pag-Asa Road/PA Road (2).webp" alt="marker image" />
                                            </div>`,
                anchor: "center center",
                tooltip: "To Magdiwang Gate (Gate 3)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ====================================== 
                      PARKING SPACES            
           ====================================== */

          /* ======================== 
                       PARKING (CBAA & MTH)            
                     ======================== */

          /* ================== 
                           CM PARKING (1)            
                         ================== */
          {
            id: "CM Parking (1)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (CBAA & MTH)/CM Parking (1).webp",
            links: [
              {
                nodeId: "CM Parking (2)",
                position: { yaw: 4.645, pitch: -0.03 },
              },
              {
                nodeId: "West Avenue (11)",
                position: { yaw: 3.12, pitch: -0.03 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-CM Parking (2)",
                position: { yaw: 4.645, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (CBAA & MTH)/CM Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-West Avenue (11)",
                position: { yaw: 3.12, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (11).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To West Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           CM PARKING (2)            
                         ================== */
          {
            id: "CM Parking (2)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (CBAA & MTH)/CM Parking (2).webp",
            links: [
              { nodeId: "PL (1)", position: { yaw: 7.15, pitch: -0.02 } },
              {
                nodeId: "CM Parking (1)",
                position: { yaw: 3.7, pitch: -0.07 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PL (1)",
                position: { yaw: 7.15, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Lane/PL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-CM Parking (1)",
                position: { yaw: 3.7, pitch: -0.07 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (CBAA & MTH)/CM Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                           CM PARKING (3)            
                         ================== */
          {
            id: "CM Parking (3)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (CBAA & MTH)/CM Parking (3).webp",
            links: [
              { nodeId: "LGD (3)", position: { yaw: 3.25, pitch: -0.09 } },
              { nodeId: "Oval (Lef)", position: { yaw: 4.72, pitch: -0.08 } },
              { nodeId: "PL (1)", position: { yaw: 5.75, pitch: -0.03 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-LGD (3)",
                position: { yaw: 3.25, pitch: -0.09 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Left/LGD (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval (Lef)",
                position: { yaw: 4.72, pitch: -0.08 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Landmarks/Oval/Oval (Lef).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Oval",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PL (1)",
                position: { yaw: 5.75, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Lane/PL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================= 
                       PARKING (GMH)            
                     ================= */

          /* ===============
                           GMH PARKING            
                         =============== */
          {
            id: "GMH Parking",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (GMH)/GMH Parking.webp",
            links: [
              {
                nodeId: "West Avenue (5)",
                position: { yaw: 8.3, pitch: -0.01 },
              },
              { nodeId: "VBH", position: { yaw: 7.45, pitch: -0.01 } },
              { nodeId: "AL (1)", position: { yaw: 5.2, pitch: -0.03 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-West Avenue (5)",
                position: { yaw: 8.3, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/West Avenue/West Avenue (5).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip:
                  "To College of Engineering, Architecture and Technology (CEAT)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-VBH",
                position: { yaw: 7.45, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Establishments/VBH.webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Vito Belarmino Hall (VBH)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-AL (1)",
                position: { yaw: 5.2, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Academy Lane/AL (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ladislao Diwa Hall (LDH)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ================ 
                       PARKING (GS)            
                     ================ */

          /* ============== 
                           GS PARKING         
                         ============== */
          {
            id: "GS Parking",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (GS)/GS Parking.webp",
            links: [
              { nodeId: "RGD (1)", position: { yaw: 2.98, pitch: 0.01 } },
              { nodeId: "RGD (2)", position: { yaw: 6.17, pitch: -0.04 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-RGD (1)",
                position: { yaw: 2.98, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-RGD (2)",
                position: { yaw: 6.17, pitch: -0.04 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ======================= 
                       PARKING (OVL & ULS)            
                     ======================= */

          /* =================
                          OU PARKING (1)            
                         ================= */
          {
            id: "OU Parking (1)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (OVl & ULS)/OU Parking (1).webp",
            links: [
              { nodeId: "RGD (3)", position: { yaw: 4.15, pitch: -0.02 } },
              { nodeId: "OU Parking (2)", position: { yaw: 5.635, pitch: 0 } },
              { nodeId: "Oval Road (6)", position: { yaw: 7.47, pitch: 0.01 } },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-RGD (3)",
                position: { yaw: 4.15, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Grandstand Drive/Right/RGD (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Grandstand (GS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-OU Parking (2)",
                position: { yaw: 5.635, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (OVL & ULS)/OU Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (6)",
                position: { yaw: 7.47, pitch: 0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (6).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To DLSU-D High School Complex (DHS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                          OU PARKING (2)            
                         ================= */
          {
            id: "OU Parking (2)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (OVL & ULS)/OU Parking (2).webp",
            links: [
              { nodeId: "OU Parking (1)", position: { yaw: 3.45, pitch: 0 } },
              {
                nodeId: "Oval Road (8)",
                position: { yaw: 7.97, pitch: -0.01 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-OU Parking (1)",
                position: { yaw: 3.45, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (OVL & ULS)/OU Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Oval Road (8)",
                position: { yaw: 7.97, pitch: -0.01 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/Oval Road (8).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ==================
                       PARKING (PCCA)            
                     ================== */

          /* ===================
                          PCCA PARKING (1)            
                         =================== */
          {
            id: "PCCA Parking (1)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (PCCA)/PCCA Parking (1).webp",
            links: [
              {
                nodeId: "PC Campos Avenue (7)",
                position: { yaw: 3.93, pitch: -0.03 },
              },
              {
                nodeId: "PCCA Parking (2)",
                position: { yaw: 0.8, pitch: -0.05 },
              },
              {
                nodeId: "Acacia Avenue (1)",
                position: { yaw: 5.6, pitch: -0.03 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PC Campos Avenue (7)",
                position: { yaw: 3.93, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/EAST/Markers/PC Campos Avenue/PC Campos Avenue (7).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PCCA Parking (2)",
                position: { yaw: 0.8, pitch: -0.05 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (1)",
                position: { yaw: 5.6, pitch: -0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                          PCCA PARKING (2)            
                         =================== */
          {
            id: "PCCA Parking (2)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (PCCA)/PCCA Parking (2).webp",
            links: [
              { nodeId: "PCCA Parking (1)", position: { yaw: 0.13, pitch: 0 } },
              {
                nodeId: "PCCA Parking (3)",
                position: { yaw: 3.38, pitch: -0.1 },
              },
              {
                nodeId: "Acacia Avenue (2)",
                position: { yaw: 2.2, pitch: -0.02 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PCCA Parking (1)",
                position: { yaw: 0.13, pitch: 0 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (1).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-PCCA Parking (3)",
                position: { yaw: 3.38, pitch: -0.1 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Parking",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (2)",
                position: { yaw: 2.2, pitch: -0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* ===================
                          PCCA PARKING (3)            
                         =================== */
          {
            id: "PCCA Parking (3)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (PCCA)/PCCA Parking (3).webp",
            links: [
              {
                nodeId: "PCCA Parking (2)",
                position: { yaw: 0.22, pitch: 0.02 },
              },
              {
                nodeId: "Acacia Avenue (3)",
                position: { yaw: 3.25, pitch: -0.13 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-PCCA Parking (2)",
                position: { yaw: 0.22, pitch: 0.02 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Parking Spaces/Parking (PCCA)/PCCA Parking (2).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To University Food Square (UFS)",
                style: { cursor: "pointer" },
              },
              {
                id: "go-to-Acacia Avenue (3)",
                position: { yaw: 3.25, pitch: -0.13 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Acacia Avenue/Acacia Avenue (3).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Acacia Avenue",
                style: { cursor: "pointer" },
              },
            ],
          },

          /* =================
                       PARKING (ULS)            
                     ================= */

          /* ==================
                          ULS PARKING (1)            
                         ================== */
          {
            id: "ULS Parking (1)",
            panorama:
              "./Images/WEST/Parking Spaces/Parking (ULS)/ULS Parking (1).webp",
            links: [
              {
                nodeId: "Oval Road (10)",
                position: { yaw: 3.08, pitch: 0.03 },
              },
            ],

            /* ============================= 
                                    Markers in Gate 3
                            ================================ */

            markers: [
              {
                id: "go-to-Oval Road (10)",
                position: { yaw: 3.08, pitch: 0.03 },
                html: `<div class="circle-marker pulse-marker">
                                        <div class="pulse-container">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <div class="pulse3"></div>
                                        </div>
                                        <img src="./Images/WEST/Markers/Oval Road/OVal Road (10).webp" alt="marker image" />
                                        </div>`,
                anchor: "center center",
                tooltip: "To Ugnayang La Salle (ULS)",
                style: { cursor: "pointer" },
              },
            ],
          },
        ],
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(MarkersPlugin);

// Marker navigation logic
// Define the mapping of marker IDs to node IDs
const markerToNodeMap = {
  /* =============================================================================== 
                       
                         EAST SIDE OF THE UNIVERSITY

   =============================================================================== */

  /* ==========================================
                       GATES
      ========================================== */

  /* =======
       GATE 1
       ======= */
  "go-to-Rotunda(front)": "Rotunda(front)",

  /* =======
       GATE 2
       ======= */
  "go-to-LPDSB": "LPDSB",
  "go-to-ICTC": "ICTC",

  /* =======
       GATE 4
       ======= */
  "go-to-Gate 4 Way (1)": "Gate 4 Way (1)",
  "go-to-G4 Parking (3)": "G4 Parking (3)",

  /* ==========================================
           ROTuNDA (ST. LA SALLE MARKER)
      ========================================== */

  /* ========================= 
       ROTuNDA (FRONT OF STATUE)
       ========================= */

  "go-to-Rotunda(west)": "Rotunda(west)",
  "go-to-Rotunda(east)": "Rotunda(east)",
  "go-to-Gate 1": "Gate 1",

  /* ========================
       ROTuNDA (WEST OF STATUE)
       ======================== */
  "go-to-Rotunda(back)": "Rotunda(back)",
  "go-to-Rotunda(front)": "Rotunda(front)",
  "go-to-JPAC Road (1)": "JPAC Road(1)",

  /* ================================== 
           ROTuNDA (EAST OF STATUE)
       ================================== */
  "go-to-Rotunda(back)": "Rotunda(back)",
  "go-to-Rotunda(front)": "Rotunda(front)",
  "go-to-IL Road (1)": "IL Road (1)",

  /* ================================== 
           ROTuNDA (BACK OF STATUE)
       ================================== */
  "go-to-Rotunda(west)": "Rotunda(west)",
  "go-to-Rotunda(east)": "Rotunda(east)",
  "go-to-Lake Avenue (1)": "Lake Avenue (1)",

  /* =================================================
          ESTABLISHMENTS (BLDG'S, OFFICES, FACILITIES) 
       ================================================= */

  /* ================================== 
            JULIAN FELIPE HALL (JFH)
       ================================== */
  "go-to-JPAC Road (1)": "JPAC Road (1)",
  "go-to-JS Road (1)": "JS Road (1)",
  "go-to-Lake Avenue (1)": "Lake Avenue (1)",

  /* ================================== 
          TANGHALANG JULIAN FELIPE (TJF)
       ================================== */
  "go-to-JPAC Road (1)": "JPAC Road (1)",
  "go-to-PCH": "PCH",

  /* ================================== 
          PAULO CAMPOS HALL (PCH)
       ================================== */
  "go-to-JPAC Road (2)": "JPAC Road (2)",
  "go-to-TJF": "TJF",

  /* =================================================  
        LASALLIAN COMMUNITY DEVELOPMENT CENTER (LCDC)
       ================================================= */
  "go-to-LCDC Road (1)": "LCDC Road (1)",
  "go-to-JS Road (1)": "JS Road (1)",

  /* ================================== 
          COLLEGE OF SCIENCE (COS)
       ================================== */
  "go-to-Gate 4 Way (1)": "Gate 4 Way (1)",
  "go-to-Gate 4 Way (2)": "Gate 4 Way (2)",

  /* ================================== 
          AYUNTAMIENTO DE GONZALES (ADG)
       ================================== */
  "go-to-AP Road (1)": "AP Road (1)",
  "go-to-AP Road (3)": "AP Road (3)",

  /* ================================== 
          DINER
      ================================== */
  "go-to-Lake Avenue (4)": "Lake Avenue (4)",
  "go-to-Lake Avenue (5)": "Lake Avenue (5)",

  /* ================================== 
          CAFE MUSEO (CM)
      ================================== */
  "go-to-Lake Avenue (8)": "Lake Avenue (8)",
  "go-to-Lake Avenue (9)": "Lake Avenue (9)",

  /* ================================== 
          UNIVERSITY FOOD SQUARE (UFS)
      ================================== */
  "go-to-Lake Avenue (9)": "Lake Avenue (9)",
  "go-to-Lake Avenue (10)": "Lake Avenue (10)",
  "go-to-Park Trail (1)": "Park Trail (1)",

  /* ================================== 
        LADIES' AND MEN'S DORMITORY COMPLEX (LMDC)
       ================================== */
  "go-to-Lake Avenue (11)": "Lake Avenue (11)",
  "go-to-West Avenue (1)": " West Avenue (1)",

  /* =================================================== 
        SEVERINO DE LAS ALAS HALL (SDLAH)/(ALUMNI BLDG)
       ==================================================== */
  "go-to-PC Campos Avenue (4)": "PC Campos Avenue (4)",
  "go-to-PC Campos Avenue (5)": "PC Campos Avenue (5)",

  /* ================================== 
          HOTEL RAFAEL (HR)
       ================================== */
  "go-to-PC Campos Avenue (2)": "PC Campos Avenue (2)",
  "go-to-PC Campos Avenue (3)": "PC Campos Avenue (3)",

  /* =========================================================== 
        INFORMATION AND COMMUNICATIONS TECHNOLOGY CENTER (ICTC)
       ============================================================ */
  "go-to-Gate 2": "Gate 2",
  "go-to-PC Campos Avenue (1)": "PC Campos Avenue (1)",

  /* =========================================================== 
        LA PORTERIA DE SAN BENILDO (LPDSB)
       ============================================================ */
  "go-to-Gate 2": "Gate 2",
  "go-to-IL Road (1)": "IL Road (1)",

  /* =========================================================== 
        AKLATANG EMILIO AGUINALDO (AEA)
       ============================================================ */
  "go-to-AEA Road (3)": "AEA Road (3)",
  "go-to-AEA Road (4)": "AEA Road (4)",

  /* ====================================================================================== 
        ANTONIO & VICTORIA COJUANGCO MEMORIAL CHAPEL OF OUR LADY OF THE HOLY ROSARY (CHAPEL)
       ====================================================================================== */
  "go-to-Museo Drive (2)": "Museo Drive (2)",
  "go-to-AEA Road (3)": "AEA Road (3)",
  "go-to-Fountain (2)": "Fountain (2)",

  /* =========================================================== 
        MUSEO DE LA SALLE (MDLS)
       ============================================================ */
  "go-to-Museo Drive (1)": "Museo Drive (1)",
  "go-to-Museo Drive (2)": "Museo Drive (2)",
  "go-to-Fountain (2)": "Fountain (2)",

  /* =========================================================== 
        CAFETERIA
       ============================================================ */
  "go-to-Lake Avenue (11)": "Lake Avenue (11)",
  "go-to-Batibot": "Batibot",
  "go-to-Park Trail (1)": "Park Trail (1)",

  /* ====================================================================
        LANDMARKS (KEY FEATURES OF UD - NOT BUILDINGS BUT NOT ROADS EITHER) 
       ====================================================================== */

  /* =========================================================== 
          STUDY SHED (SS)
       ============================================================ */
  "go-to-Lake Avenue (2)": "Lake Avenue (2)",
  "go-to-JS Road (1)": "JS Road (1)",

  /* =========================================================== 
          LUMINA BRIDGE (LB)
       ============================================================ */
  "go-to-Lake Avenue (7)": "Lake Avenue (7)",
  "go-to-PC Campos Avenue (3)": "PC Campos Avenue (3)",

  /* =========================================================== 
          LAKE PARK (LP)
       ============================================================ */
  "go-to-Park Trail (2)": "Park Trail (2)",
  "go-to-PC Campos Avenue (8)": "PC Campos Avenue (8)",
  "go-to-PC Campos Avenue (9)": "PC Campos Avenue (9)",

  /* =========================================================== 
          BATIBOT
       ============================================================ */
  "go-to-Cafeteria": "Cafeteria",
  "go-to-West Avenue (3)": "West Avenue (3)",

  /* ============================================================ 
          FOUNTAIN
       ============================================================ */

  /* ================================== 
            FOUNTAIN (1)
           ================================== */
  "go-to-Museo Drive (1)": "Museo Drive (1)",
  "go-to-AEA Road (1)": "AEA Road (1)",
  "go-to-Fountain (2)": "Fountain (2)",
  "go-to-Lake Avenue (7)": "Lake Avenue (7)",

  /* ================================== 
            FOUNTAIN (2)
           ================================== */
  "go-to-AEA Road (2)": "AEA Road (2)",
  "go-to-MDLS": "MDLS",
  "go-to-Fountain (1)": "Fountain (1)",
  "go-to-Chapel": "Chapel",

  /* ==========================================
            PATHWAYS AND ROADS 
       ========================================== */

  /* ================================== 
          LAKE AVENUE
       ================================== */

  /* ================================== 
          LAKE AVENUE (1)
       ================================== */
  "go-to-Rotunda(back)": "Rotunda(back)",
  "go-to-Lake Avenue (2)": "Lake Avenue (2)",
  "go-to-JFH": "JFH",

  /* ================================== 
          LAKE AVENUE (2)
       ================================== */
  "go-to-Lake Avenue (1)": "Lake Avenue (1)",
  "go-to-Lake Avenue (3)": "Lake Avenue (3)",
  "go-to-SS": "SS",

  /* ================================== 
          LAKE AVENUE (3)
       ================================== */
  "go-to-Lake Avenue (2)": "Lake Avenue (2)",
  "go-to-Lake Avenue (4)": "Lake Avenue (4)",

  /* ================================== 
          LAKE AVENUE (4)
       ================================== */
  "go-to-Lake Avenue (3)": "Lake Avenue (3)",
  "go-to-Diner": "Diner",

  /* ================================== 
          LAKE AVENUE (5)
       ================================== */
  "go-to-Lake Avenue (6)": "Lake Avenue (6)",
  "go-to-Diner": "Diner",

  /* ================================== 
          LAKE AVENUE (6)
       ================================== */
  "go-to-Lake Avenue (5)": "Lake Avenue (5)",
  "go-to-Lake Avenue (7)": "Lake Avenue (7)",
  "go-to-AEA Road (1)": "AEA Road (1)",

  /* ================================== 
          LAKE AVENUE (7)
       ================================== */
  "go-to-Lake Avenue (6)": "Lake Avenue (6)",
  "go-to-Lake Avenue (8)": "Lake Avenue (8)",
  "go-to-Fountain (1)": "Fountain (1)",
  "go-to-LB": "LB",

  /* ================================== 
          LAKE AVENUE (8)
       ================================== */
  "go-to-Lake Avenue (7)": "Lake Avenue (7)",
  "go-to-CM": "CM",
  "go-to-Museo Drive (1)": "Museo Drive (1)",

  /* ================================== 
          LAKE AVENUE (9)
       ================================== */
  "go-to-CM": "CM",
  "go-to-UFS": "UFS",

  /* ================================== 
          LAKE AVENUE (10)
       ================================== */
  "go-to-Lake Avenue (11)": "Lake Avenue (11)",
  "go-to-UFS": "UFS",

  /* ================================== 
          LAKE AVENUE (11)
       ================================== */
  "go-to-Lake Avenue (10)": "Lake Avenue (10)",
  "go-to-LMDC": "LMDC",
  "go-to-Cafeteria": "Cafeteria",

  /* ================================== 
          WEST AVENUE
       ================================== */

  /* ================================== 
          WEST AVENUE (1)
       ================================== */
  "go-to-LMDC": "LMDC",
  "go-to-West Avenue (2)": "West Avenue (2)",

  /* ================================== 
          WEST AVENUE (2)
       ================================== */
  "go-to-West Avenue (1)": "West Avenue (1)",
  "go-to-West Avenue (3)": "West Avenue (3)",

  /* ================================== 
          WEST AVENUE (3)
       ================================== */
  "go-to-West Avenue (2)": "West Avenue (2)",
  "go-to-PC Campos Avenue (9)": "PC Campos Avenue (9)",
  "go-to-Batibot": "Batibot",
  "go-to-West Avenue (4)": "West Avenue (4)",

  /* ================================== 
          JPAC ROAD
       ================================== */

  /* ================================== 
          JPAC ROAD (1)
       ================================== */
  "go-to-Rotunda(west)": "Rotunda(west)",
  "go-to-TJF": "TJF",
  "go-to-Parking (1)": "Parking (1)",
  "go-to-JFH": "JFH",

  /* ================================== 
          JPAC ROAD (2)
       ================================== */
  "go-to-PCH": "PCH",
  "go-to-JPAC Road (3)": "JPAC Road (3)",
  "go-to-Parking (2)": "Parking (2)",
  "go-to-AP Road (1)": "AP Road (1)",

  /* ================================== 
          JPAC ROAD (3)
       ================================== */
  "go-to-Gate 4 Way (1)": "Gate 4 Way (1)",
  "go-to-JPAC Road (2)": "JPAC Road (2)",

  /* ================================== 
                GATE 4 WAY            
        ================================== */

  /* ================================== 
          GATE 4 WAY  (1)            
        ================================== */
  "go-to-JPAC Road (3)": "JPAC Road (3)",
  "go-to-Gate 4": "Gate 4",
  "go-to-COS": "COS",

  /* ================================== 
          GATE 4 WAY  (2)            
         ================================== */
  "go-to-COS": "COS",
  "go-to-Gate 4 Way (3)": "Gate 4 Way (3)",

  /* ================================== 
          GATE 4 WAY  (3)            
         ================================== */
  "go-to-Gate 4 Way (2)": "Gate 4 Way (2)",
  "go-to-Gate 4 Way (4)": "Gate 4 Way (4)",
  "go-to-COS Parking": "COS Parking",

  /* ================================== 
          GATE 4 WAY  (4)            
         ================================== */
  "go-to-Gate 4 Way (3)": "Gate 4 Way (3)",
  "go-to-Gate 4 Way (5)": "Gate 4 Way (5)",
  "go-to-LCDC Road (3)": "LCDC Road (3)",

  /* ================================== 
          GATE 4 WAY  (5)            
         ================================== */
  "go-to-Gate 4 Way (4)": "Gate 4 Way (4)",
  "go-to-Gate 4 Way (6)": "Gate 4 Way (6)",

  /* ================================== 
          GATE 4 WAY  (6)            
         ================================== */
  "go-to-Gate 4 Way (5)": "Gate 4 Way (5)",
  "go-to-Gate 4 Way (7)": "Gate 4 Way (7)",
  "go-to-AEA Road (4)": "AEA Road (4)",

  /* ================================== 
          GATE 4 WAY  (7)            
         ================================== */
  "go-to-Chapel Parking": "Chapel Parking",
  "go-to-Gate 4 Way (6)": "Gate 4 Way (6)",

  /* ================================== 
            JS ROAD          
         ================================== */

  /* ================================== 
                JS ROAD (1)           
         ================================== */
  "go-to-JFH": "JFH",
  "go-to-LCDC": "LCDC",
  "go-to-SS": "SS",

  /* ================================== 
            LCDC ROAD (LCDC-RESIDENCIA)           
         ================================== */

  /* ================================== 
            LCDC ROAD (1)           
         ================================== */
  "go-to-LCDC": "LCDC",
  "go-to-LCDC Road (2)": "LCDC Road (2)",

  /* ================================== 
            LCDC ROAD (2)           
         ================================== */
  "go-to-LCDC Road (1)": "LCDC Road (1)",
  "go-to-LCDC Road (3)": "LCDC Road (3)",
  "go-to-AP Road (3)": "AP Road (3)",

  /* ================================== 
            LCDC ROAD (3)           
         ================================== */
  "go-to-LCDC Road (2)": "LCDC Road (2)",
  "go-to-Gate 4 Way (4)": "Gate 4 Way (4)",
  "go-to-AP Road (3)": "AP Road (3)",

  /* ================================== 
           AP ROAD (ADG-PCH)           
         ================================== */

  /* ================================== 
           AP ROAD (1)           
         ================================== */
  "go-to-JPAC Road (2)": "JPAC Road (2)",
  "go-to-AP Road (2)": "AP Road (2)",
  "go-to-ADG": "ADG",

  /* ================================== 
           AP ROAD (2)           
         ================================== */
  "go-to-AP Road (1)": "AP Road (1)",
  "go-to-AP Road (3)": "AP Road (3)",
  "go-to-ADG": "ADG",

  /* ================================== 
           AP ROAD (3)           
         ================================== */
  "go-to-AP Road (2)": "AP Road (2)",
  "go-to-AP Road (4)": "AP Road (4)",
  "go-to-ADG": "ADG",
  "go-to-LCDC Road (2)": "LCDC Road (2)",

  /* ================================== 
           AP ROAD (4)           
         ================================== */
  "go-to-COS Parking": "COS Parking",
  "go-to-AP Road (3)": "AP Road (3)",
  "go-to-ADG": "ADG",

  /* ================================== 
            PC CAMPOS AVENUE
       ================================== */

  /* ================================== 
            PC CAMPOS AVENUE (1)
        ================================== */
  "go-to-ICTC": "ICTC",
  "go-to-PC Campos Avenue (2)": "PC Campos Avenue (2)",

  /* ================================== 
            PC CAMPOS AVENUE (2)
        ================================== */
  "go-to-PC Campos Avenue (1)": "PC Campos Avenue (1)",
  "go-to-HR": "HR",

  /* ================================== 
            PC CAMPOS AVENUE (3)
        ================================== */
  "go-to-HR": "HR",
  "go-to-PC Campos Avenue (4)": "PC Campos Avenue (4)",
  "go-to-LB": "LB",

  /* ================================== 
            PC CAMPOS AVENUE (4)
        ================================== */
  "go-to-PC Campos Avenue (3)": "PC Campos Avenue (3)",
  "go-to-SDLAH": "SDLAH",

  /* ================================== 
            PC CAMPOS AVENUE (5)
        ================================== */
  "go-to-SDLAH": "SDLAH",
  "go-to-PC Campos Avenue (6)": "PC Campos Avenue (6)",

  /* ================================== 
            PC CAMPOS AVENUE (6)
        ================================== */
  "go-to-PC Campos Avenue (5)": "PC Campos Avenue (5)",
  "go-to-PC Campos Avenue (7)": "PC Campos Avenue (7)",

  /* ================================== 
            PC CAMPOS AVENUE (7)
        ================================== */
  "go-to-PC Campos Avenue (6)": "PC Campos Avenue (6)",
  "go-to-PC Campos Avenue (8)": "PC Campos Avenue (8)",
  "go-to-PCCA Parking (1)": "PCCA Parking (1)",

  /* ================================== 
            PC CAMPOS AVENUE (8)
        ================================== */
  "go-to-PC Campos Avenue (7)": "PC Campos Avenue (7)",
  "go-to-PC Campos Avenue (9)": "PC Campos Avenue (9)",
  "go-to-Park Trail (2)": "Park Trail (2)",
  "go-to-Acacia Avenue (1)": "Acacia Avenue (1)",

  /* ================================== 
            PC CAMPOS AVENUE (9)
        ================================== */
  "go-to-West Avenue (3)": "West Avenue (3)",
  "go-to-PC Campos Avenue (8)": "PC Campos Avenue (8)",
  "go-to-Park Trail (2)": "Park Trail (2)",
  "go-to-LDH (1)": "LDH (1)",

  /* ================================== 
          IL ROAD (ICTC-LPDSB)
         ================================== */
  "go-to-LPDSB": "LPDSB",
  "go-to-Rotunda(east)": "Rotunda(east)",
  "go-to-G2 Parking (2)": "G2 Parking (2)",

  /* ================================== 
          MUSEO DRIVE
         ================================== */

  /* ================================== 
          MUSEO DRIVE (1)
         ================================== */
  "go-to-Lake Avenue (8)": "Lake Avenue (8)",
  "go-to-MDLS": "MDLS",
  "go-to-Fountain (1)": "Fountain (1)",

  /* ================================== 
          MUSEO DRIVE (2)
         ================================== */
  "go-to-MDLS": "MDLS",
  "go-to-Museo Drive (3)": "Museo Drive (3)",
  "go-to-Chapel": "Chapel",

  /* ================================== 
          MUSEO DRIVE (3)
         ================================== */
  "go-to-Museo Drive (2)": "Museo Drive (2)",
  "go-to-Chapel Parking": "Chapel Parking",

  /* ================================== 
          AEA ROAD
         ================================== */

  /* ================================== 
          AEA ROAD (1)
         ================================== */
  "go-to-Lake Avenue (6)": "Lake Avenue (6)",
  "go-to-Fountain (1)": "Fountain (1)",
  "go-to-AEA Road (2)": "AEA Road (2)",

  /* ================================== 
          AEA ROAD (2)
         ================================== */
  "go-to-AEA Road (3)": "AEA Road (3)",
  "go-to-AEA Road (1)": "AEA Road (1)",
  "go-to-Fountain (2)": "Fountain (2)",

  /* ================================== 
          AEA ROAD (3)
         ================================== */
  "go-to-AEA Road (2)": "AEA Road (2)",
  "go-to-AEA": "AEA",
  "go-to-Chapel": "Chapel",

  /* ================================== 
          AEA ROAD (4)
         ================================== */
  "go-to-Gate 4 Way (6)": "Gate 4 Way (6)",
  "go-to-AEA": "AEA",

  /* ================================== 
          PARK TRAIL
         ================================== */

  /* ================================== 
          PARK TRAIL (1)
         ================================== */
  "go-to-Park Trail (2)": "Park Trail (2)",
  "go-to-Cafeteria": "Cafeteria",
  "go-to-UFS": "UFS",

  /* ================================== 
          PARK TRAIL (2)
         ================================== */
  "go-to-PC Campos Avenue (8)": "PC Campos Avenue (8)",
  "go-to-PC Campos Avenue (9)": "PC Campos Avenue (9)",
  "go-to-LP": "LP",
  "go-to-Park Trail (1)": "Park Trail (1)",

  /* ================================== 
              PARKING SPACES            
         ================================== */

  /* ================================== 
          PARKING (GATE 1 & GATE 4)            
         ================================== */

  /* ================================== 
          PARKING (1)            
         ================================== */
  "go-to-JPAC Road (1)": "JPAC Road (1)",
  "go-to-G4 Parking (2)": "G4 Parking (2)",

  /* ================================== 
          PARKING (2)            
         ================================== */
  "go-to-G4 Parking (1)": "G4 Parking (1)",
  "go-to-G4 Parking (3)": "G4 Parking (3)",
  "go-to-JPAC Road (2)": "JPAC Road (2)",

  /* ================================== 
          PARKING (3)            
         ================================== */
  "go-to-G4 Parking (2)": "G4 Parking (2)",
  "go-to-Gate 4": "Gate 4",

  /* ================================== 
          PARKING (GATE 1 & GATE 2)            
         ================================== */

  /* ================================== 
            PARKING (1)            
         ================================== */
  "go-to-G2 Parking (2)": "G2 Parking (2)",
  "go-to-IL Road (1)": "IL Road (1)",

  /* ================================== 
            PARKING (2)            
         ================================== */
  "go-to-G2 Parking (1)": "G2 Parking (1)",
  "go-to-G2 Parking (3)": "G2 Parking (3)",
  "go-to-IL Road (1)": "IL Road (1)",

  /* ================================== 
            PARKING (3)            
         ================================== */
  "go-to-G2 Parking (2)": "G2 Parking (2)",
  "go-to-IL Road (1)": "IL Road (1)",

  /* ================================== 
          PARKING (COLLEGE OF SCIENCE)            
         ================================== */

  /* ================================== 
          COS PARKING            
         ================================== */
  "go-to-AP Road (4)": "AP Road (4)",
  "go-to-Gate 4 Way (3)": "Gate 4 Way (3)",

  /* ================================== 
          PARKING (CHAPEL)            
         ================================== */

  /* ================================== 
            CHAPEL PARKING           
         ================================== */
  "go-to-Gate 4 Way (7)": "Gate 4 Way (7)",
  "go-to-Museo Drive (3)": "Museo Drive (3)",

  /* =============================================================================== 
                       
                         WEST SIDE OF THE UNIVERSITY

   =============================================================================== */

  /* ==========================================
                       GATES
         ========================================== */

  /* ================
            GATE 3
         ================ */
  "go-to-Rotunda": "Rotunda",

  /* ==========================================
              ROTuNDA (ST. LA SALLE MARKER)
         ========================================== */

  /* ================
            ROTuNDA
         ================ */
  "go-to-Oval Road (14)": "Oval Road (14)",
  "go-to-Gate 3": "Gate 3",

  /* =================================================
            ESTABLISHMENTS (BLDG'S, OFFICES, FACILITIES) 
         ================================================= */

  /* ==========================================
                CANDIDO TIRONA HALL (CTH)
         ========================================== */
  "go-to-FCH (2)": "FCH (2)",
  "go-to-AL (3)": "AL (3)",

  /* ==========================================
                FELIPE CALDERON HALL (FCH)
         ========================================== */

  /* =====================
              FCH (1)
         ===================== */
  "go-to-LDH (3)": "LDH (3)",
  "go-to-FCH (2)": "FCH (2)",

  /* =====================
              FCH (2)
         ===================== */
  "go-to-FCH (1)": "FCH (1)",
  "go-to-CTH": "CTH",
  "go-to-AL (1)": "AL (1)",

  /* ==========================================
                    GRANDSTAND (GS)
         ========================================== */

  /* =====================
              GS (1)
         ===================== */
  "go-to-Oval (Mid)": "Oval (Mid)",
  "go-to-GS (2)": "GS (2)",
  "go-to-LGD (1)": "LGD (1)",
  "go-to-RGD (1)": "RGD (1)",

  /* =====================
              GS (2)
         ===================== */
  "go-to-GS (1)": "GS (1)",
  "go-to-GS (3)": "GS (3)",

  /* =====================
              GS (3)
         ===================== */
  "go-to-GS (2)": "GS (2)",

  /* ==========================================
                LADISLAO DIWA HALL (LDH)
         ========================================== */

  /* =====================
              LDH (1)
         ===================== */
  "go-to-PC Campos Avenue (9)": "PC Campos Avenue (9)",
  "go-to-LDH (2)": "LDH (2)",

  /* =====================
              LDH (2)
         ===================== */
  "go-to-LDH (1)": "LDH (1)",
  "go-to-LDH (3)": "LDH (3)",

  /* =====================
              LDH (3)
         ===================== */
  "go-to-LDH (2)": "LDH (2)",
  "go-to-LDH (4)": "LDH (4)",
  "go-to-FCH (1)": "FCH (1)",

  /* =====================
              LDH (4)
         ===================== */
  "go-to-LDH (3)": "LDH (3)",
  "go-to-AL (1)": "AL (1)",

  /* ==========================================
                  BAHAY PAG-ASA (BPA)
         ========================================== */
  "go-to-PA Road (2)": "PA Road (2)",
  "go-to-PA Road (3)": "PA Road (3)",

  /* ==============================================================
          COLLEGE OF BUSINESS ADMINISTRATION AND ACCOUNTANCY (CBAA)
         ============================================================== */
  "go-to-MTH": "MTH",
  "go-to-West Avenue (9)": "West Avenue (9)",

  /* ================================================================
          COLLEGE OF ENGINEERING, ARCHITECTURE, AND TECHNOLOGY (CEAT)
         ================================================================ */
  "go-to-West Avenue (6)": "West Avenue (6)",
  "go-to-West Avenue (7)": "West Avenue (7)",

  /* ==========================================
              VITO BELARMINO HALL (VBH)
         ========================================== */
  "go-to-West Avenue (4)": "West Avenue (4)",
  "go-to-West Avenue (5)": "West Avenue (5)",
  "go-to-GMH Parking": "GMH Parking",

  /* ==========================================
                MARIANO TRIAS HALL (MTH)
         ========================================== */
  "go-to-West Avenue (8)": "West Avenue (8)",
  "go-to-CBAA": "CBAA",

  /* ==============================================
          MARIANO TRIAS HALL COVERED COURT (MTH CC)
         ============================================== */
  "go-to-West Avenue (7)": "West Avenue (7)",
  "go-to-AL (5)": "AL (5)",

  /* ==========================================
            OLYMPIC SIZE SWIMMING POOL (POOL)
         ========================================== */
  "go-to-Oval Road (12)": "Oval Road (12)",

  /* ==========================================
            RETREAT & CONFERENCE CENTER (RCC)
         ========================================== */
  "go-to-Oval Road (13)": "Oval Road (13)",
  "go-to-PA Road (3)": "PA Road (3)",

  /* ==========================================
              UGNAYANG LA SALLE (ULS)
         ========================================== */
  "go-to-Oval Road (10)": "Oval Road (10)",
  "go-to-Oval Road (11)": "Oval Road (11)",
  "go-to-Oval Road (12)": "Oval Road (11)",

  /* ====================================================================
          LANDMARKS (KEY FEATURES OF UD - NOT BUILDINGS BUT NOT ROADS EITHER) 
         ====================================================================== */

  /* ==========================================
                        OVAL
         ========================================== */

  /* =====================
              OVAL (LEF)
         ===================== */
  "go-to-Oval (Mid)": "Oval (Mid)",
  "go-to-PL (1)": "PL (1)",

  /* =====================
              OVAL (MID)
         ===================== */
  "go-to-Oval (Lef)": "Oval (Lef)",
  "go-to-Oval (Rig)": "Oval (Rig)",
  "go-to-Oval Road (3)": "Oval Road (3)",
  "go-to-GS (1)": "GS (1)",

  /* =====================
              OVAL (RIG)
         ===================== */
  "go-to-Oval (Mid)": "Oval (Mid)",
  "go-to-RGD (3)": "RGD (3)",

  /* ==========================================
                    AMPITHEATER
         ========================================== */
  "go-to-UEC": "UEC",

  /* ==========================================
                  RESTING PLACE (RP)
         ========================================== */
  "go-to-UEC": "UEC",

  /* ==========================================
              UNIVERSITY EVENTS CENTER (UEC)
         ========================================== */
  "go-to-Oval Road (7)": "Oval Road (7)",
  "go-to-RP": "RP",
  "go-to-Ampitheater": "Ampitheater",

  /* ==========================================
                 PATHWAYS AND ROADS 
         ========================================== */

  /* ==========================================
                    ACACIA AVENUE
         ========================================== */

  /* ==========================================
              ACACIA AVENUE (1)
        ========================================== */
  "go-to-PC Campos Avenue (8)": "PC Campos Avenue (8)",
  "go-to-Acacia Avenue (2)": "Acacia Avenue (2)",
  "go-to-PCCA Parking (1)": "PCCA Parking (1)",

  /* ==========================================
                ACACIA AVENUE (2)
         ========================================== */
  "go-to-Acacia Avenue (1)": "Acacia Avenue (1)",
  "go-to-Acacia Avenue (3)": "Acacia Avenue (3)",
  "go-to-PCCA Parking (2)": "PCCA Parking (2)",

  /* ==========================================
                ACACIA AVENUE (3)
         ========================================== */
  "go-to-Acacia Avenue (2)": "Acacia Avenue (2)",
  "go-to-Acacia Avenue (4)": "Acacia Avenue (4)",
  "go-to-PCCA Parking (3)": "PCCA Parking (3)",

  /* ==========================================
                ACACIA AVENUE (4)
         ========================================== */
  "go-to-Acacia Avenue (3)": "Acacia Avenue (3)",
  "go-to-Acacia Avenue (5)": "Acacia Avenue (5)",
  "go-to-AL (5)": "AL (5)",

  /* ==========================================
                ACACIA AVENUE (5)
         ========================================== */
  "go-to-Acacia Avenue (4)": "Acacia Avenue (4)",
  "go-to-Acacia Avenue (6)": "Acacia Avenue (6)",

  /* ==========================================
                ACACIA AVENUE (6)
         ========================================== */
  "go-to-Acacia Avenue (5)": "Acacia Avenue (5)",
  "go-to-West Avenue (12)": "West Avenue (12)",

  /* ==========================================
                    ACADEMY LANE
         ========================================== */

  /* ==================
              AL (1)
         ================== */
  "go-to-LDH (4)": "LDH (4)",
  "go-to-FCH (2)": "FCH (2)",
  "go-to-AL (2)": "AL (2)",
  "go-to-GMH Parking": "GMH Parking",

  /* ==================
              AL (2)
         ================== */
  "go-to-AL (1)": "AL (1)",
  "go-to-AL (3)": "AL (3)",

  /* ==================
              AL (3)
         ================== */
  "go-to-AL (2)": "AL (2)",
  "go-to-CTH": "CTH",
  "go-to-AL (4)": "AL (4)",

  /* ==================
              AL (4)
         ================== */
  "go-to-AL (3)": "AL (3)",
  "go-to-AL (5)": "AL (5)",

  /* ==================
              AL (5)
         ================== */
  "go-to-AL (4)": "AL (4)",
  "go-to-AL (6)": "AL (6)",
  "go-to-Acacia Avenue (4)": "Acacia Avenue (4)",
  "go-to-MTH (CC)": "MTH (CC)",

  /* ==================
              AL (6)
         ================== */
  "go-to-AL (5)": "AL (5)",
  "go-to-AL (7)": "AL (7)",
  "go-to-AL (8)": "AL (8)",

  /* ==================
              AL (7)
         ================== */
  "go-to-AL (6)": "AL (6)",
  "go-to-AL (8)": "AL (8)",

  /* ==================
              AL (8)
         ================== */
  "go-to-AL (7)": "AL (7)",
  "go-to-AL (9)": "AL (9)",

  /* ==================
              AL (9)
         ================== */
  "go-to-AL (8)": "AL (8)",
  "go-to-AL (10)": "AL (10)",

  /* ==================
              AL (10)
         ================== */
  "go-to-AL (9)": "AL (9)",
  "go-to-AL (11)": "AL (11)",

  /* ==================
              AL (11)
         ================== */
  "go-to-AL (10)": "AL (10)",
  "go-to-West Avenue (11)": "West Avenue (11)",

  /* ==========================================
                    DLSUD-HS
         ========================================== */

  /* ==================
              HS (1)
         ================== */
  "go-to-Oval Road (5)": "Oval Road (5)",
  "go-to-HS (2)": "HS (2)",

  /* ==================
              HS (2)
         ================== */
  "go-to-Oval Road (4)": "Oval Road (4)",
  "go-to-HS (1)": "HS (1)",

  /* ==========================================
                    OVAL ROAD
         ========================================== */

  /* =====================
            OVAL ROAD (1)
          ===================== */
  "go-to-West Avenue (12)": "West Avenue (12)",
  "go-to-Oval Road (2)": "Oval Road (2)",

  /* =====================
            OVAL ROAD (2)
         ===================== */
  "go-to-Oval Road (1)": "Oval Road (1)",
  "go-to-Oval Road (3)": "Oval Road (3)",

  /* =====================
            OVAL ROAD (3)
         ===================== */
  "go-to-Oval Road (2)": "Oval Road (2)",
  "go-to-Oval Road (4)": "Oval Road (4)",
  "go-to-Oval (Mid)": "Oval (Mid)",

  /* =====================
            OVAL ROAD (4)
         ===================== */
  "go-to-Oval Road (3)": "Oval Road (3)",
  "go-to-Oval Road (5)": "Oval Road (5)",
  "go-to-HS (2)": "HS (2)",

  /* =====================
            OVAL ROAD (5)
         ===================== */
  "go-to-Oval Road (4)": "Oval Road (4)",
  "go-to-Oval Road (6)": "Oval Road (6)",
  "go-to-HS (1)": "HS (1)",

  /* =====================
            OVAL ROAD (6)
         ===================== */
  "go-to-Oval Road (5)": "Oval Road (5)",
  "go-to-Oval Road (7)": "Oval Road (7)",
  "go-to-OU Parking (1)": "OU Parking (1)",

  /* =====================
            OVAL ROAD (7)
         ===================== */
  "go-to-Oval Road (6)": "Oval Road (6)",
  "go-to-Oval Road (8)": "Oval Road (8)",
  "go-to-UEC": "UEC",

  /* =====================
            OVAL ROAD (8)
         ===================== */
  "go-to-Oval Road (7)": "Oval Road (7)",
  "go-to-Oval Road (9)": "Oval Road (9)",
  "go-to-OU Parking (2)": "OU Parking (2)",

  /* =====================
            OVAL ROAD (9)
         ===================== */
  "go-to-Oval Road (8)": "Oval Road (8)",
  "go-to-Oval Road (10)": "Oval Road (10)",

  /* =====================
            OVAL ROAD (10)
         ===================== */
  "go-to-Oval Road (9)": "Oval Road (9)",
  "go-to-Oval Road (11)": "Oval Road (11)",
  "go-to-ULS Parking (1)": "ULS Parking (1)",
  "go-to-ULS": "ULS",

  /* =====================
            OVAL ROAD (11)
         ===================== */
  "go-to-Oval Road (10)": "Oval Road (10)",
  "go-to-Oval Road (12)": "Oval Road (12)",
  "go-to-ULS": "ULS",

  /* =====================
            OVAL ROAD (12)
         ===================== */
  "go-to-Oval Road (11)": "Oval Road (11)",
  "go-to-Oval Road (13)": "Oval Road (13)",
  "go-to-ULS": "ULS",
  "go-to-Pool": "Pool",

  /* =====================
            OVAL ROAD (13)
         ===================== */
  "go-to-Oval Road (12)": "Oval Road (12)",
  "go-to-Oval Road (14)": "Oval Road (14)",
  "go-to-RCC": "RCC",
  "go-to-PA Road (1)": "PA Road (1)",

  /* =====================
            OVAL ROAD (14)
         ===================== */
  "go-to-Oval Road (13)": "Oval Road (13)",
  "go-to-Rotunda": "Rotunda",

  /* ==========================================
                    PAG-ASA ROAD
         ========================================== */

  /* =========================
            PAG-ASA ROAD (1)
         ========================= */
  "go-to-Oval Road (13)": "Oval Road (13)",
  "go-to-PA Road (2)": "PA Road (2)",

  /* =========================
            PAG-ASA ROAD (2)
         ========================= */
  "go-to-PA Road (1)": "PA Road (1)",
  "go-to-PA Road (3)": "PA Road (3)",
  "go-to-RGD (6)": "RGD (6)",
  "go-to-BPA": "BPA",

  /* =========================
            PAG-ASA ROAD (3)
         ========================= */
  "go-to-PA Road (2)": "PA Road (2)",
  "go-to-BPA": "BPA",
  "go-to-RCC": "RCC",

  /* ==========================================
                    PARKING LANE
         ========================================== */

  /* =========================
            PL (1)
         ========================= */
  "go-to-West Avenue (10)": "West Avenue (10)",
  "go-to-Oval (Lef)": "Oval (Lef)",
  "go-to-CM Parking (2)": "CM Parking (2)",
  "go-to-CM Parking (3)": "CM Parking (3)",

  /* ==========================================
                    WEST AVENUE
         ========================================== */

  /* =========================
            WEST AVENUE (4)
         ========================= */
  "go-to-West Avenue (3)": "West Avenue (3)",
  "go-to-VBH": "VBH",

  /* =========================
            WEST AVENUE (5)
         ========================= */
  "go-to-VBH": "VBH",
  "go-to-West Avenue (6)": "West Avenue (6)",
  "go-to-GMH Parking": "GMH Parking",

  /* =========================
            WEST AVENUE (6)
         ========================= */
  "go-to-CEAT": "CEAT",
  "go-to-West Avenue (5)": "West Avenue (5)",

  /* =========================
            WEST AVENUE (7)
         ========================= */
  "go-to-West Avenue (8)": "West Avenue (8)",
  "go-to-CEAT": "CEAT",
  "go-to-MTH (CC)": "MTH (CC)",

  /* =========================
            WEST AVENUE (8)
         ========================= */
  "go-to-MTH": "MTH",
  "go-to-West Avenue (7)": "West Avenue (7)",

  /* =========================
            WEST AVENUE (9)
         ========================= */
  "go-to-CBAA": "CBAA",
  "go- to-West Avenue (10)": "West Avenue (10)",
  "go-to-PL (1)": "PL (1)",

  /* =========================
            WEST AVENUE (10)
         ========================= */
  "go-to-West Avenue (9)": "West Avenue (9)",
  "go-to-West Avenue (11)": "West Avenue (11)",

  /* =========================
            WEST AVENUE (11)
         ========================= */
  "go-to-West Avenue (10)": "West Avenue (10)",
  "go-to-West Avenue (12)": "West Avenue (12)",
  "go-to-AL (11)": "AL (11)",
  "go-to-CM Parking (1)": "CM Parking (1)",

  /* =========================
            WEST AVENUE (12)
         ========================= */
  "go-to-West Avenue (11)": "West Avenue (11)",
  "go-to-Acacia Avenue (6)": "Acacia Avenue (6)",
  "go-to-Oval Road (1)": "Oval Road (1)",

  /* ==========================================
                    GRANDSTAND DRIVE
         ========================================== */

  /* ==========================================
                    LEFT
         ========================================== */

  /* ====================
              LGD (1)
         ==================== */
  "go-to-GS (1)": "GS (1)",
  "go-to-LGD (2)": "LGD (2)",

  /* ====================
              LGD (2)
         ==================== */
  "go-to-LGD (1)": "LGD (1)",
  "go-to-LGD (3)": "LGD (3)",

  /* ====================
              LGD (3)
         ==================== */
  "go-to-CM Parking (3)": "CM Parking (3)",
  "go-to-LGD (2)": "LGD (2)",

  /* ==========================================
                    RIGHT
         ========================================== */

  /* ====================
              RGD (1)
         ==================== */
  "go-to-GS (1)": "GS (1)",
  "go-to-GS Parking": "GS Parking",

  /* ====================
              RGD (2)
         ==================== */
  "go-to-GS Parking": "GS Parking",
  "go-to-RGD (3)": "RGD (3)",
  "go-to-RGD (4)": "RGD (4)",

  /* ====================
              RGD (3)
         ==================== */
  "go-to-Oval (Rig)": "Oval (Rig)",
  "go-to-RGD (2)": "RGD (2)",
  "go-to-RGD (4)": "RGD (4)",
  "go-to-OU Parking (1)": "OU Parking (1)",

  /* ====================
              RGD (4)
         ==================== */
  "go-to-RGD (2)": "RGD (2)",
  "go-to-RGD (3)": "RGD (3)",
  "go-to-RGD (5)": "RGD (5)",

  /* ====================
              RGD (5)
         ==================== */
  "go-to-RGD (4)": "RGD (4)",
  "go-to-RGD (6)": "RGD (6)",

  /* ====================
              RGD (6)
         ==================== */
  "go-to-RGD (5)": "RGD (5)",
  "go-to-PA Road (2)": "PA Road (2)",

  /* ================================== 
                  PARKING SPACES            
         ================================== */

  /* ================================== 
          PARKING (CBAA & MTH)            
         ================================== */

  /* ================================== 
          CM PARKING (1)            
         ================================== */
  "go-to-CM Parking (2)": "CM Parking (2)",
  "go-to-West Avenue (11)": "West Avenue (11)",

  /* ================================== 
          CM PARKING (2)            
         ================================== */
  "go-to-PL (1)": "PL (1)",
  "go-to-CM Parking (1)": "CM Parking (1)",

  /* ================================== 
          CM PARKING (3)            
         ================================== */
  "go-to-PL (1)": "PL (1)",
  "go-to-Oval (Lef)": "Oval (Lef)",
  "go-to-LGD (4)": "LGD (4)",

  /* ================================== 
          PARKING (GMH)            
         ================================== */

  /* ================================== 
          GMH PARKING            
         ================================== */
  "go-to-West Avenue (5)": "West Avenue (5)",
  "go-to-VBH": "VBH",
  "go-to-AL (1)": "AL (1)",

  /* ================================== 
          PARKING (GS)            
         ================================== */

  /* ================================== 
          GS PARKING            
         ================================== */
  "go-to-RGD (1)": "RGD (1)",
  "go-to-RGD (2)": "RGD (2)",

  /* ================================== 
          PARKING (OVL & ULS)            
         ================================== */

  /* ================================== 
          OU PARKING (1)            
         ================================== */
  "go-to-RGD (3)": "RGD (3)",
  "go-to-OU Parking (2)": "OU Parking (2)",
  "go-to-Oval Road (6)": "Oval Road (6)",

  /* ================================== 
          OU PARKING (2)            
         ================================== */
  "go-to-OU Parking (1)": "OU Parking (1)",
  "go-to-Oval Road (8)": "Oval Road (8)",

  /* ================================== 
          PARKING (PCCA)            
         ================================== */

  /* ================================== 
          PCCA PARKING (1)            
         ================================== */
  "go-to-PC Campos Avenue (7)": "PC Campos Avenue (7)",
  "go-to-PCCA Parking (2)": "PCCA Parking (2)",
  "go-to-Acacia Avenue (1)": "Acacia Avenue (1)",

  /* ================================== 
          PCCA PARKING (2)            
         ================================== */
  "go-to-PCCA Parking (1)": "PCCA Parking (1)",
  "go-to-PCCA Parking (3)": "PCCA Parking (3)",
  "go-to-Acacia Avenue (2)": "Acacia Avenue (2)",

  /* ================================== 
          PCCA PARKING (3)            
         ================================== */
  "go-to-PCCA Parking (2)": "PCCA Parking (2)",
  "go-to-Acacia Avenue (3)": "Acacia Avenue (3)",

  /* ================================== 
          PARKING (ULS)            
         ================================== */

  /* ================================== 
          ULS PARKING (1)            
         ================================== */
  "go-to-Oval Road (10)": "Oval Road (10)",
};

// Marker navigation logic
markersPlugin.addEventListener("select-marker", ({ marker }) => {
  // 🟢 Handle info-only markers (show description box)

  /* =============================================================================== 
   |                                                                             |
   |                      EAST SIDE OF THE UNIVERSITY                            | 
   |                                                                             | 
   =============================================================================== */

  /* ================================================             
                       GATES
   ================================================ */

  if (marker.id === "gate1-info") {
    showBuildingInfo(
      "MAGDALO GATE (GATE 1)",

      `
        The "Magdalo Gate" at De La Salle University - Dasmariñas (DLSU-D) is named after 
        the Magdalo faction of the Katipunan in Cavite, a revolutionary organization in the 
        Philippines during the Philippine Revolution, aiming to achieve independence from 
        Spain. The Magdalo faction was led by Baldomero Aguinaldo and famously associated 
        with Emilio Aguinaldo, the later president of the First Philippine Republic. 
        The gate itself serves as a main entrance of DLSU-D for students and personnel. 
        The main landmark is the statue of St. La Salle at the center of the rotunda.
       `,

      [
        "./Images/INFO/Gates/Gate 1.webp",
        "./Images/INFO/Gates/Gate 2.webp",
        "./Images/INFO/Gates/Gate 3.webp",
        "./Images/INFO/Gates/Gate 4.webp",
      ],
      "./AUDIOS/Gates/Gate 1.mp3" // Path to the specific audio for Gate 1
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "gate2-info") {
    showBuildingInfo(
      "MAGPURI GATE (GATE 2)",

      `
       The "Magpuri Gate" is named after the town of Perez Dasmariñas and was known by the 
       Katipuneros as a place where the people of Perez were from. It serves as the main 
       entrance and exit for vehicles accessing the West Campus of De La Salle University - 
       Dasmariñas. It is the gate nearest Dasmariñas Bagong Bayan area.
      `,

      ["./Images/INFO/Gates/Gate 2.webp"],
      "./AUDIOS/Gates/Gate 2.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "gate4-info") {
    showBuildingInfo(
      "MAGTAGUMPAY GATE (GATE 4)",

      `
       The "Magtagumpay Gate" at De La Salle University - Dasmariñas is named after the Filipino 
       word "Magtagumpay", which means "to triumph" or "to succeed". The name reflects the 
       university's commitment to academic excellence and the spirit of perseverance embodied by 
       its students. While not directly linked to a specific revolutionary group like Magdalo 
       or Magpuri, the name Magtagumpay draws inspiration from the aspirations of the Filipino 
       people during the time of revolution—a collective hope for independence, progress, and 
       triumph over adversity. Situated on the eastern side of the campus, this gate serves as 
       an auxiliary entry and exit point for vehicles and provides direct access to nearby 
       facilities such as the College of Science (COS) and key parking areas.
      `,

      ["./Images/INFO/Gates/Gate 4.webp"],
      "./AUDIOS/Gates/Gate 4.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  /* ================================================
            ROTUNDA (ST. LA SALLE MARKER)
   ================================================ */

  if (marker.id === "Statue-info") {
    showBuildingInfo(
      "STATUE OF ST. JOHN BAPTIST DE LA SALLE",

      `
       At the heart of the DLSU-D Rotunda stands a statue of St. John Baptist de La Salle, 
       the founder of the Institute of the Brothers of the Christian Schools and the patron 
       saint of teachers. The statue symbolizes his enduring legacy in education and his 
       mission of bringing quality learning to the youth, especially the poor. Surrounded by 
       greenery and often used as a central landmark, the statue serves as a daily reminder 
       of Lasallian values—faith, service, and communion in mission.
      `,

      ["./Images/INFO/Rotunda/Statue.webp"],
      "./AUDIOS/Rotunda/Statue.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  /* ============================================================
           ESTABLISHMENTS (BLDG'S, OFFICES, FACILITIES) 
   ============================================================ */

  if (marker.id === "JFH-info") {
    showBuildingInfo(
      "JULIAN FELIPE HALL (JFH)",

      `
       Named after the composer of the Philippine National Anthem, Lupang Hinirang, 
       Julian Felipe Hall is home to the College of Liberal Arts. It houses classrooms and 
       laboratories for Communication, Broadcast Journalism, Psychology, and Speech programs. 
       Within the building are two major facilities: the Tanghalang Julian Felipe 
       (a fully equipped theater) and the Bulwagang Jose Basa (a parliamentary-style 
       conference hall).
      `,

      ["./Images/INFO/EAST/Establishments/JFH.webp"],
      "./AUDIOS/EAST/Establishments/JFH.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "LCDC-info") {
    showBuildingInfo(
      "LASALLIAN COMMUNITY DEVELOPMENT CENTER (LCDC)",

      `
       The Lasallian Community Development Center serves as the social action and extension 
       arm of De La Salle University - Dasmariñas. With over 35 years of dedicated service, 
       LCDC leads the university's efforts in implementing inclusive, sustainable, and 
       innovative community development programs. Rooted in the Lasallian spirit, it fosters 
       strong partnerships and meaningful engagement with local communities to advance social 
       transformation and development.
      `,

      ["./Images/INFO/EAST/Establishments/LCDC.webp"],
      "./AUDIOS/EAST/Establishments/LCDC.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "TJF-info") {
    showBuildingInfo(
      "TANGHALANG JULIAN FELIPE (TJF)",

      `
       Tanghalang Julian Felipe is a prominent auditorium located within the East Campus 
       of De La Salle University - Dasmariñas. Attached to the Julian Felipe Hall, this venue 
       is widely used for talks, seminars, workshops, conferences, and award ceremonies. 
       Positioned near the Julian Felipe Hall parking area and close to the university rotunda, 
       Tanghalang Julian Felipe serves as a key gathering space for academic and institutional 
       events.
      `,

      ["./Images/INFO/EAST/Establishments/TJF.webp"],
      "./AUDIOS/EAST/Establishments/TJF.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "PCH-info") {
    showBuildingInfo(
      "PAULO CAMPOS HALL (PCH)",

      `
       Named after Dr. Paulo C. Campos, the visionary founder of De La Salle University - 
       Dasmariñas. In 1977, he established the institution as General Emilio Aguinaldo 
       College-Cavite (GEAC). A decade later, in 1987, the school was acquired by the De La 
       Salle Brothers and integrated into the Lasallian network, eventually becoming De La 
       Salle University - Dasmariñas (DLSU-D). PCH is home to the College of Science (COS) 
       and also hosts classes under CLAC. It houses laboratories for Biology, Chemistry, 
       Physics, and Mathematics, serving as a hub for scientific learning and discovery. 
       Conveniently located beside Julian Felipe Hall and across the LCDC Building, it stands 
       as a testament to DLSU-D's commitment to academic excellence and its rich 
       founding legacy.
      `,

      ["./Images/INFO/EAST/Establishments/PCH.webp"],
      "./AUDIOS/EAST/Establishments/PCH.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "COS-info") {
    showBuildingInfo(
      "COLLEGE OF SCIENCE (COS)",

      `
       Located near the Magtagumpay Gate, the COS Building serves as an academic hub for 
       Computer Studies students. It houses modern computer laboratories, lecture rooms, and 
       faculty offices under the College of Science. The building supports hands-on learning 
       in programming, data science, and other IT-related fields.
      `,

      ["./Images/INFO/EAST/Establishments/COS.webp"],
      "./AUDIOS/EAST/Establishments/COS.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "ADG-info") {
    showBuildingInfo(
      "AYUNTAMIENTO DE GONZALES (ADG)",

      `
       The Ayuntamiento Building is the official hub for student organizations at De La Salle 
       University-Dasmariñas. It was envisioned by Br. Augustine Boquer FSC as a dedicated 
       space to nurture student leadership and collaboration, and it was entirely funded 
       through donations from sponsors and alumni. In addition to housing student groups, 
       the Ayuntamiento also serves as a vital administrative center, where students process 
       enrollment, registration, and other university transactions, making it a cornerstone 
       of both student life and campus operations.
      `,

      ["./Images/INFO/EAST/Establishments/ADG.webp"],
      "./AUDIOS/EAST/Establishments/ADG.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "Diner-info") {
    showBuildingInfo(
      "MILA'S DINER",

      `
       Mila's Diner is a cozy campus diner and lounge where students can relax, eat, and 
       recharge in between classes. Known for its laid-back atmosphere and convenient location, 
       it serves as both a go-to dining spot and a hangout area for students looking to unwind, 
       socialize, or enjoy a quiet meal.
      `,

      ["./Images/INFO/EAST/Establishments/Diner.webp"],
      "./AUDIOS/EAST/Establishments/Diner.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "CM-info") {
    showBuildingInfo(
      "CAFE MUSEO",

      `
       Café Museo is a quaint and relaxing café located within the Museo De La Salle complex 
       at DLSU-D. With its warm ambiance and rustic charm, it serves as a perfect spot for 
       students, faculty, and visitors to enjoy a quiet break. Often frequented after museum 
       visits or campus tours, Café Museo offers a selection of snacks and beverages in a 
       cozy, heritage-inspired setting—making it a unique fusion of culture and comfort.
      `,

      ["./Images/INFO/EAST/Establishments/CM.webp"],
      "./AUDIOS/EAST/Establishments/CM.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "UFS-info") {
    showBuildingInfo(
      "UNIVERSITY FOOD SQUARE",

      `
       Also known as the Square Canteen, the University Food Square serves as the vibrant food 
       hub of DLSU-D, conveniently located at the intersection of the East and West Campuses. 
       It offers a wide variety of delicious meals, snacks, and beverages from different 
       concessionaires, catering to the diverse tastes of students, faculty, and visitors alike.
      `,

      ["./Images/INFO/EAST/Establishments/UFS.webp"],
      "./AUDIOS/EAST/Establishments/UFS.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "LMDC-info") {
    showBuildingInfo(
      "LADIES' AND MEN'S DORMITORY COMPLEX (LMDC)",

      `
       Located near the University Food Square, the LMDC provides convenient and secure 
       on-campus housing for both male and female students. With 11 dedicated buildings in the 
       northern part of the campus, these dormitories offer easy access to the university's 
       dining, commercial, and recreational facilities. Managed by the Matron's Office, 
       accommodations are available on a first come, first served basis at the start of the 
       academic year.
      `,

      ["./Images/INFO/EAST/Establishments/LMDC.webp"],
      "./AUDIOS/EAST/Establishments/LMDC.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "SDLAH-info") {
    showBuildingInfo(
      "SEVERINO DE LAS ALAS HALL (ALUMNI BLDG.)",

      `
       Also known as the Alumni Building, Severino de las Alas Hall serves as a key events and 
       administrative hub at DLSU-D. It houses the DLSU-D Alumni Association and the Risk, 
       Compliance, and Audit Office on the ground floor. The building features two conference 
       rooms, a multi-purpose hall, and the Alumni Auditorium—a 400-seater venue equipped with 
       projectors and sound systems, commonly used for assemblies, seminars, and commencement 
       activities. The auditorium is located on the third floor and follows the University's 
       reservation policies.
      `,

      ["./Images/INFO/EAST/Establishments/SDLAH.webp"],
      "./AUDIOS/EAST/Establishments/SDLAH.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "HR-info") {
    showBuildingInfo(
      "HOTEL RAFAEL",

      `
       Hotel Rafael, located within the DLSU-D campus, serves as the university's official 
       accommodation hub for faculty, students, and guests attending seminars and events. 
       Originally known as Hotel Nicole, it opened in 1994 and was designed after classic 
       Vigan architecture. Initially built as a practicum site for Hotel & Restaurant 
       Management students, it featured only a few rooms and function areas. Renamed in honor 
       of Br. Rafael Donato, FSC, the hotel has since expanded to 28 guest rooms and multiple 
       event venues, including the Centennial Hall, Salrial Ballroom, and CTHM Courtyard. 
       Recognized by the City Government of Dasmariñas as one of Cavite's top recommended 
       accommodations, Hotel Rafael continues to host both local and international visitors 
       with excellent hospitality and service.
      `,

      ["./Images/INFO/EAST/Establishments/HR.webp"],
      "./AUDIOS/EAST/Establishments/HR.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "ICTC-info") {
    showBuildingInfo(
      "INFORMATION AND COMMUNICATIONS TECHNOLOGY CENTER (ICTC)",

      `
       Located near Gate 2, the two-storey ICTC Building houses the university's Information 
       and Communications Technology Center on the first floor and the Computer Studies Center 
       laboratories on the second. The ICTC is the backbone of DLSU-D's digital infrastructure. 
       Established in 1996 and renamed in 2010, the center oversees the development and 
       maintenance of the university's information systems, networks, web platforms, and 
       technical services. It leads automation efforts, manages the university's communication 
       systems, provides IT training, and supports digital tools like the myDLSUD portal. The 
       building also serves as the hub for ICT specialists handling system development, 
       documentation, network security, and helpdesk services—ensuring that technology 
       enhances both administrative processes and the academic experience at DLSU-D.
      `,

      ["./Images/INFO/EAST/Establishments/ICTC.webp"],
      "./AUDIOS/EAST/Establishments/ICTC.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "LPDSB-info") {
    showBuildingInfo(
      "LA PORTERIA DE SAN BENILDO (LPDSB)",

      `
       Situated near Magpuri Gate (Gate 2), this two-storey building houses key 
       student-focused services. The first floor is home to the DLSU-D Cooperative, while 
       the second floor hosts the Language Learning Center (LLC), offering classrooms and 
       language instruction facilities.
      `,

      ["./Images/INFO/EAST/Establishments/LPDSB.webp"],
      "./AUDIOS/EAST/Establishments/LPDSB.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "AEA-info") {
    showBuildingInfo(
      "AKLATANG EMILIO AGUINALDO (AEA)",

      `
       The Aklatang Emilio Aguinaldo-Information Resource Center is DLSU-D's main hub for 
       research and learning resources. The new building houses a vast collection of books, 
       journals, periodicals, and digital databases that support academic research and 
       development. The old Aklatan, a replica of Emilio Agui naldo's home in Kawit, Cavite, 
       now serves as the Office of the President and houses the University's audiovisual 
       collection, including the Luis Aguado and Eugenio Cabeza viewing rooms for seminars 
       and screenings. The AEA-IRC fosters a dynamic and collaborative study environment for 
       students and faculty.
      `,

      ["./Images/INFO/EAST/Establishments/AEA.webp"],
      "./AUDIOS/EAST/Establishments/AEA.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "Chapel-info") {
    showBuildingInfo(
      "ANTONIO & VICTORIA COJUANGCO MEMORIAL CHAPEL OF OUR LADY OF THE HOLY ROSARY (CHAPEL)",

      `
       The Chapel of Our Lady of the Holy Rosary is the spiritual heart of De La Salle 
       University - Dasmariñas. It serves as the main venue for faith-based activities 
       including morning prayers, Eucharistic celebrations, and other spiritual gatherings. 
       Located within the campus, it also houses the Campus Ministry Office and the University 
       Lasallian Family Offices, fostering a strong sense of faith and reflection within the 
       Lasallian community.
      `,

      ["./Images/INFO/EAST/Establishments/Chapel.webp"],
      "./AUDIOS/EAST/Establishments/Chapel.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "MDLS-info") {
    showBuildingInfo(
      "MUSEO DE LA SALLE (MDLS)",

      `
       Museo De La Salle is a heritage museum designed after a 19th-century Bahay na Bato, 
       showcasing the refined lifestyle of the Ilustrado class during the Spanish colonial 
       period. Located within the DLSU-D campus, it houses authentic antique collections and 
       serves as a venue for educational tours, art exhibits, cultural events, and historical 
       lectures. As a sustainable heritage center, the museum promotes art, history, and 
       national identity—fostering cultural awareness and appreciation within the Lasallian 
       and wider community. Much of the collections inside the museum were donated by DLSU 
       President Emeritus Br. Andrew Gonzalez FSC.
      `,

      ["./Images/INFO/EAST/Establishments/MDLS.webp"],
      "./AUDIOS/EAST/Establishments/MDLS.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "MAH-info") {
    showBuildingInfo(
      "MARIANO ALVAREZ HALL (MAH)",

      `
       Mariano Alvarez Hall is one of the first buildings encountered when entering the East 
       Campus of De La Salle University - Dasmariñas. Named after Caviteño revolutionary 
       leader Mariano Álvarez, the hall currently houses the Buildings and Facilities 
       Maintenance Office (BFMO), which oversees the construction, maintenance, and upkeep of 
       the university's physical assets. Previously, MAH served as the home for the Information 
       and Communications Technology Center and the College of Education.
      `,

      ["./Images/INFO/EAST/Establishments/MAH.webp"],
      "./AUDIOS/EAST/Establishments/MAH.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "CTHM-info") {
    showBuildingInfo(
      "COLLEGE OF TOURISM AND HOSPITALITY MANAGEMENT (CTHM)",

      `
       The CTHM Building, a prominent architectural landmark on the East Campus of DLSU-D, is 
       home to the College of Tourism and Hospitality Management. One of the largest college 
       buildings in the university, it houses state-of-the-art facilities including the 
       Salreal Ballroom and the CTHM Courtyard, which serve as venues for academic and 
       professional events. The building is also shared by Senior High School students. As a 
       center of excellence in hospitality and tourism education, CTHM is committed to 
       producing globally competitive graduates through transformative learning, relevant 
       research, and a strong culture of professionalism and service. <br><br>
       <span class="info-note"><i>Note: The building is currently undergoing renovations to 
       further enhance its facilities.<i></span>
      `,

      ["./Images/INFO/EAST/Establishments/CTHM.webp"],
      "./AUDIOS/EAST/Establishments/CTHM.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "RSM-info") {
    showBuildingInfo(
      "RESIDENCIA SAN MIGUEL (RSM)",

      `
       Residencia San Miguel is a premium housing facility within the DLSU-D campus. Formerly 
       a residence for the De La Salle Brothers and Brother Aspirants, it now offers upscale 
       accommodations for female Lasallian students starting School Year 2024-2025. The 
       residence features various rooming options—from single to quadruple sharing—equipped 
       with study tables, cabinets, air-conditioning, private bathrooms, and Wi-Fi access. 
       Students can also relax in a spacious common living area designed for comfort, 
       reflection, and community interaction.
      `,

      ["./Images/INFO/EAST/Establishments/RSM.webp"],
      "./AUDIOS/EAST/Establishments/RSM.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "MP-info") {
    showBuildingInfo(
      "MOTOR POOL (TRANSPORTATION BLDG.)",

      `
      The Motor Pool, also known as the Transportation Building, serves as the central hub for 
      managing the university's official vehicles and transport-related operations. It supports 
      campus mobility for both academic and administrative functions, ensuring safe and efficient 
      transport services within and outside the university. In addition to its logistical role, 
      the Motor Pool also plays a vital part in De La Salle University - Dasmariñas' disaster risk 
      reduction and emergency preparedness efforts. Since 2017, the facility has been equipped 
      with an emergency response vehicle and trained medical first responders. A fire truck is 
      also stationed at the Motor Pool, ensuring rapid response during natural disasters or 
      emergency situations across the campus.
      `,

      ["./Images/INFO/EAST/Establishments/MP.webp"],
      "./AUDIOS/EAST/Establishments/MP.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "ERC-info") {
    showBuildingInfo(
      "ELECTRONIC RESOURCE CENTER (ERC)",

      `
       The Electronic Resource Center (ERC) at DLSU-D provides access to modern research 
       tools and digital services. It houses facilities for internet use, multimedia viewing, 
       CD-ROM collections, and various electronic resources. Students can scan, print, 
       download materials, and even convert theses to PDF or burn them onto CDs. The ERC also 
       manages the Online Public Access Catalog (OPAC) and maintains library databases and 
       hardware. Though located in a separate building from the main library, it plays a vital 
       role in supporting academic research with up-to-date technology and comfortable study 
       environments.
      `,

      ["./Images/INFO/EAST/Establishments/ERC.webp"],
      "./AUDIOS/EAST/Establishments/ERC.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  /* =================================================================================
         LANDMARKS (KEY FEATURES OF UD - NOT BUILDINGS BUT NOT ROADS EITHER) 
   ================================================================================= */

  if (marker.id === "SS-info") {
    showBuildingInfo(
      "STUDY SHED (KUBO)",

      `
      The Study Shed, commonly referred to as the Kubo, is an open-air nipa-style hut located 
      within the DLSU-D campus. Designed as a peaceful and shaded space, it offers students a 
      refreshing alternative to indoor study areas. Surrounded by greenery, the kubo provides 
      a quiet, breezy environment ideal for relaxation, group discussions, or focused solo 
      studying. It reflects the university's commitment to providing student-friendly, 
      nature-integrated learning spaces that promote well-being and academic productivity.
      `,

      ["./Images/INFO/EAST/Landmarks/SS.webp"],
      "./AUDIOS/EAST/Landmarks/SS.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "LB-info") {
    showBuildingInfo(
      "LUMINA BRIDGE",

      `
      The Lumina Bridge, previously known simply as the bridge between the East and West 
      campuses of DLSU-D, now bears a name rich with meaning. Lumina, derived from the Latin 
      word for “bright light,” symbolizes the spirit of the Lasallian community—individuals 
      who serve as beacons of hope and catalysts for positive change. This elevated pathway 
      not only physically connects key parts of the campus but also represents unity, growth, 
      and the journey toward enlightenment. It is often used by students and staff as a scenic 
      and convenient route, especially between academic buildings and common areas.
      `,

      ["./Images/INFO/EAST/Landmarks/LB.webp"],
      "./AUDIOS/EAST/Landmarks/LB.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "LP-info") {
    showBuildingInfo(
      "LAKE PARK",

      `
       Located at the heart of the DLSU-D campus, Lake Park is a scenic open-air venue known 
       for its versatility and vibrant atmosphere. Overlooking the iconic campus lake, the 
       park features a central stage and wide grounds ideal for outdoor concerts, fairs, trade 
       bazaars, and other student-led activities. Historically, it served as the setting for 
       events like Kantahan, Tugtugan at Sayawan and awarding ceremonies, making it a memorable 
       space for celebration and community gathering among Lasallians.
      `,

      ["./Images/INFO/EAST/Landmarks/LP.webp"],
      "./AUDIOS/EAST/Landmarks/LP.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "Batibot-info") {
    showBuildingInfo(
      "BATIBOT",

      `
       Once a cozy hangout spot for Lasallian students, the Batibot Student Lounge served as a 
       go-to area for rest, group discussions, and casual gatherings between classes. Located 
       near the East Campus, it was known for its open-air layout and student-friendly 
       atmosphere. Today, the space has been thoughtfully repurposed into a peaceful garden 
       area—offering a green, quiet retreat that still preserves the spirit of relaxation and 
       community it once fostered.
      `,

      ["./Images/INFO/EAST/Landmarks/Batibot.webp"],
      "./AUDIOS/EAST/Landmarks/Batibot.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "BG-info") {
    showBuildingInfo(
      "BOTANICAL GARDEN",

      `
       The Botanical Garden at De La Salle University-Dasmariñas is a serene green space that 
       showcases the university's commitment to environmental conservation. Nestled across the 
       Br. Gus Boquer FSC Cultural Heritage Complex and accessible via the Lumina Bridge behind 
       Hotel Rafael, the garden offers a peaceful escape into nature. It is home to various 
       native plant species and serves as a thriving habitat for endemic butterflies and birds, 
       making it an ideal spot for quiet reflection, learning, and ecological appreciation.
      `,

      ["./Images/INFO/EAST/Landmarks/BG.webp"],
      "./AUDIOS/EAST/Landmarks/BG.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "CHC-info") {
    showBuildingInfo(
      "BR. GUS BOQUER FSC CULTURAL HERITAGE COMPLEX",

      `
       The Br. Gus Boquer FSC Cultural Heritage Complex at De La Salle University-Dasmariñas 
       stands as a vibrant center for culture, heritage, and faith. It is home to the Museo 
       de La Salle, which preserves and displays 19th-century Ilustrado artifacts, offering 
       visitors a glimpse into the elegance of Filipino heritage. The complex also hosts 
       lecture series, art exhibitions, and cultural programs in collaboration with 
       organizations that promote the arts. Adjacent to the museum is the University Chapel, 
       a solemn space where masses and spiritual activities are held, fostering reflection 
       and community among Lasallians.
      `,

      ["./Images/INFO/EAST/Landmarks/CHC.webp"],
      "./AUDIOS/EAST/Landmarks/CHC.mp3"
    );
    return; // ❌ Don't proceed to navigation logic
  }

  /* =============================================================================== 
   |                                                                             |
   |                       WEST SIDE OF THE UNIVERSITY                           |
   |                                                                             |
   =============================================================================== */

  /* ===================================================================
                              GATES
    =================================================================== */

  if (marker.id === "gate3-info") {
    showBuildingInfo(
      "MAGDIWANG GATE (GATE 3)",

      `
       Named after the Magdiwang faction of the Katipunan, this gate honors the revolutionary 
       movement led by Mariano Álvarez, a key figure in Cavite's fight for independence. 
       Closely associated with Andrés Bonifacio, the Magdiwang faction played a major role 
       in the Philippine Revolution. Today, the Magdiwang Gate serves as an auxiliary entrance 
       to DLSU-D's East Campus, accommodating both pedestrians and motorists.
      `,

      ["./Images/INFO/Gates/Gate 3.webp"],
      "./AUDIOS/WEST/Gates/Gate 3.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  /* ===================================================================
             ESTABLISHMENTS (BLDG'S, OFFICES, FACILITIES) 
   =================================================================== */

  if (marker.id === "CTH-info") {
    showBuildingInfo(
      "CANDIDO TIRONA HALL (CTH)",

      `
       Named after General Candido Mata Tirona, a revolutionary hero of the Battle of 
       Binakayan and Secretary of War under the Magdalo Council, this hall serves as a 
       major academic building for the College of Engineering, Architecture, and Technology. 
       It houses classrooms, laboratories, and workshops designed to support technical and 
       hands-on learning for engineering and architecture students.
      `,

      ["./Images/INFO/WEST/Establishments/CTH.webp"],
      "./AUDIOS/WEST/Establishments/CTH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "FCH-info") {
    showBuildingInfo(
      "FELIPE CALDERON HALL (FCH)",

      `
       Named after Felipe Calderon, a prominent Filipino lawyer and one of the principal 
       authors of the Malolos Constitution of 1899, this one-storey building supports the 
       academic operations of the College of Education (COEd) and the College of Law 
       Enforcement and Public Safety. It houses classrooms, faculty offices, and the Faculty 
       Association Office, serving as a center for training future educators and public 
       safety professionals.
      `,

      ["./Images/INFO/WEST/Establishments/FCH.webp"],
      "./AUDIOS/WEST/Establishments/FCH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "GS-info") {
    showBuildingInfo(
      "GRANDSTAND (GS)",

      `
       The Grandstand at DLSU-Dasmariñas is a versatile facility that accommodates up to 
       500 spectators for athletic events, cultural performances, and outdoor ceremonies. 
       Beyond its tiered seating, the structure also houses classrooms, computer laboratories, 
       and administrative offices for the Linen Department, ROTC, and CWTS programs. 
       On fair-weather days, instructors and students often take advantage of its open-air 
       atmosphere for alternative learning activities, making it both a center of campus spirit 
       and a flexible teaching venue.
      `,

      ["./Images/INFO/WEST/Establishments/GS.webp"],
      "./AUDIOS/WEST/Establishments/GS.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "LDH-info") {
    showBuildingInfo(
      "LADISLAO DIWA HALL (LDH)",

      `
       Named after Ladislao Diwa—one of the founders of the Katipunan and a hero of the 
       Biyak-na-Bato Republic—Diwa Hall houses key support services and learning spaces for 
       the College of Education. Within its walls you'll find the Materials Reproduction 
       Office, the COE Student Council office, the Guidance and Counseling office, and 
       dedicated consultation rooms. Classrooms for education students fill the remainder of 
       the building, which sits directly across from Felipe Calderon Hall near the University 
       Square and Administration Building.
      `,

      ["./Images/INFO/WEST/Establishments/LDH.webp"],
      "./AUDIOS/WEST/Establishments/LDH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "BPA-info") {
    showBuildingInfo(
      "BAHAY PAG-ASA (BPA)",

      `
       Bahay Pag-Asa Pavilion is De La Salle University-Dasmariñas's dedicated youth 
       development center, offering a rehabilitative alternative to traditional detention. 
       Through a holistic formation program, it provides children in conflict with the law 
       with life skills training, educational support, and mentoring. The pavilion also 
       delivers committed legal assistance and coordinates post-release services—ensuring 
       each youth receives sustained guidance, community reintegration support, and 
       opportunities for positive personal growth.
      `,

      ["./Images/INFO/WEST/Establishments/BPA.webp"],
      "./AUDIOS/WEST/Establishments/BPA.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "CBAA-info") {
    showBuildingInfo(
      "COLLEGE OF BUSINESS ADMINISTRATION AND ACCOUNTANCY (CBAA)",

      `
       Opened in 2003 and expanded in 2015, this modern two-story facility features smart 
       classrooms, dedicated labs for analytics and accountancy, and energy-saving LED 
       lighting. Its four departments—Accountancy, Allied Business, Business Management, 
       and Marketing—operate under one roof, fostering ethical leadership and community 
       engagement. Rooted in Lasallian ideals of faith, zeal, and communion, CBAA at 
       DLSU-Dasmariñas prepares socially responsible, technically adept business professionals 
       for Southern Luzon and beyond.
      `,

      ["./Images/INFO/WEST/Establishments/CBAA.webp"],
      "./AUDIOS/WEST/Establishments/CBAA.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "CEAT-info") {
    showBuildingInfo(
      "COLLEGE OF ENGINEERING, ARCHITECTURE AND TECHNOLOGY (CEAT)",

      `
       It was formerly named the College of Engineering and Technology Building (CET), it is a 
       newly-built building, which replaced the Don Placido Campos Hall (DPH). It is considered 
       one of the most modern buildings in DLSU-D. It serves as the primary building for 
       Engineering, Architecture, and Technology students. It was finished in 2004, after the 
       CET vacated its former building, the Mariano Trias Hall. Laboratories, function halls, 
       offices, and classrooms are situated here. Though temporarily vacated, with classes 
       relocated to the east front of the Administration Building—CEAT continues to exemplify 
       cutting-edge learning environments for its students. <br><br>
       <span class="info-note"><i>Note: This building is currently closed for retrofitting 
       and safety enhancements.<i></span>
      `,

      ["./Images/INFO/WEST/Establishments/CEAT.webp"],
      "./AUDIOS/WEST/Establishments/CEAT.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "VBH-info") {
    showBuildingInfo(
      "VITO BELARMINO HALL (VBH)",

      `
       Named after the revolutionary general Vito Belarmino, this historic building is one 
       of the oldest standing structures in DLSU-D's East Campus. VBH primarily serves as a 
       classroom facility for Business Administration students and occasionally accommodates 
       students from De La Salle Health Sciences Institute. Once a regular academic hall, it 
       now also functions as a storage area for staff and student organizations. Its namesake, 
       Gen. Belarmino, was a Katipunero and a key figure in the Philippine Revolution, 
       known for his bravery in battles across Cavite and Batangas alongside Gen. Emilio 
       Aguinaldo.
      `,

      ["./Images/INFO/WEST/Establishments/VBH.webp"],
      "./AUDIOS/WEST/Establishments/VBH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "MTH-info") {
    showBuildingInfo(
      "MARIANO TRIAS HALL (MTH)",

      `
       Named after revolutionary hero General Mariano Trias y Closas, this building once 
       served as the College of Engineering and Technology (CET). Today, it is primarily 
       occupied by the College of Business Administration's Management department, with 
       additional spaces used by the Building and Grounds Department, Physical Facilities 
       Office, and for student classrooms.
      `,

      ["./Images/INFO/WEST/Establishments/MTH.webp"],
      "./AUDIOS/WEST/Establishments/MTH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "Pool-info") {
    showBuildingInfo(
      "UNIVERSITY OLYMPIC SIZE SWIMMING POOL",

      `
       Located in the West Campus near Ugnayang La Salle, the Olympic-sized swimming pool at 
       De La Salle University - Dasmariñas serves as a premier venue for Physical Education 
       classes, certificate programs, and competitive swimming events in Cavite. The facility 
       features concrete, covered bleachers, 12 spacious shower areas, and 52 dressing 
       cubicles, all set within a contemporary design that harmonizes with the campus's 
       natural surroundings.
      `,

      ["./Images/INFO/WEST/Establishments/Pool.webp"],
      "./AUDIOS/WEST/Establishments/Pool.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "RCC-info") {
    showBuildingInfo(
      "RETREAT & CONFERENCE CENTER (RCC)",

      `
       The Retreat and Conference Center (RCC) at DLSU-D is a dedicated venue for spiritual 
       formation, student retreats, and leadership training. Set in a peaceful part of the 
       campus, it offers dormitory-style accommodations and multi-purpose halls ideal for 
       recollections, conferences, and reflective gatherings. Envisioned to strengthen 
       Lasallian values, the RCC supports the holistic development of the university community 
       through faith-based and formative experiences.
      `,

      [
        "./Images/INFO/WEST/Establishments/RCC.webp",
        "./Images/INFO/WEST/Establishments/RCC 1.webp",
      ],
      "./AUDIOS/WEST/Establishments/RCC.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "ULS-info") {
    showBuildingInfo(
      "UGNAYANG LA SALLE (ULS)",

      `
       Formerly known as Palaruang La Salle, the Ugnayang La Salle (ULS) is DLSU-D's premier 
       sports and multipurpose complex. It features a three-court indoor stadium, gym, dance 
       studio, table tennis room, and a stage with backstage area. While originally built for 
       athletics, ULS has evolved into a top venue in Cavite for large-scale events such as 
       seminars, awarding ceremonies, and graduations. It is located adjacent to the
       university's Olympic-sized swimming pool.
      `,

      ["./Images/INFO/WEST/Establishments/ULS.webp"],
      "./AUDIOS/WEST/Establishments/ULS.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "GMH-info") {
    showBuildingInfo(
      "GREGORIA MONTOYA HALL (GMH)",

      `
       Named after revolutionary heroine Gregoria Montoya, who led a 30-man Magdalo unit 
       during the Battle of Calero, Gregoria Montoya Hall—commonly known as the 
       Administration Building—serves as the administrative hub of DLSU-D. It houses vital 
       offices such as the Registrar, Accounting, Purchasing, Compliance, Human Resources, 
       and Institutional Communications. It also hosts the Office of Student Services, 
       Guidance and Counseling, and major student organizations like the University Student 
       Council, Heraldo Filipino, Council of Student Organizations, and the Performing Arts 
       Group.
      `,

      ["./Images/INFO/WEST/Establishments/GMH.webp"],
      "./AUDIOS/WEST/Establishments/GMH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "FBH-info") {
    showBuildingInfo(
      "FRANCISCO BARZAGA HALL (POLCA OFFICE)",

      `
       Named after Francisco Barzaga, a notable Caviteño public servant and supporter of 
       education, Francisco Barzaga Hall serves as the headquarters of POLCA 
       (Parents Organization of La Salle Cavite). It includes an assembly area used for 
       meetings and parent-related activities, reinforcing the strong collaboration between 
       the University and its stakeholders. The building also houses the Ikot La Salle jeepney 
       terminal and parking area, making it a central point for campus transportation services. 
       Its location supports both functional use and community engagement within the campus.
      `,

      ["./Images/INFO/WEST/Establishments/FBH.webp"],
      "./AUDIOS/WEST/Establishments/FBH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "HS-info") {
    showBuildingInfo(
      "DLSU-D HIGH SCHOOL COMPLEX (DHS)",

      `
       The DLSU-D High School Complex (DHS) is the official high school of De 
       La Salle University - Dasmariñas, offering K-12 Academic Track strands: STEM, HUMSS, 
       ABM, and GAS. It provides holistic Lasallian formation and quality education that 
       prepares students for college, with access to DLSU-D's extensive facilities, labs, 
       and resources. Rooted in faith, service, and communion, LSHS fosters both academic 
       excellence and character development.
      `,

      ["./Images/INFO/WEST/Establishments/DHS.webp"],
      "./AUDIOS/WEST/Establishments/DHS.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "SAH-info") {
    showBuildingInfo(
      "SANTIAGO ALVAREZ HALL (WAREHOUSE, PROPERTY)",

      `
       Santiago Alvarez Hall is named after revolutionary general Santiago Alvarez, famously 
       known as Kidlat ng Apoy for his fiery courage during key battles such as the Battle of 
       Dalahican. A founder and honorary president of the first Nacionalista Party directorate, 
       he is honored through this building at DLSU-D, which currently houses the university's 
       Warehouse and Property Offices.
      `,

      ["./Images/INFO/WEST/Establishments/SAH.webp"],
      "./AUDIOS/WEST/Establishments/SAH.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "SEC-info") {
    showBuildingInfo(
      "SECURITY OFFICE",

      `
       The Security Office, commonly referred to as the “Security House” at De La Salle 
       University-Dasmariñas (DLSU-D), is a unit under the General Services Office (GSO) 
       tasked with maintaining campus safety. It oversees campus-wide security protocols 
       such as K9 patrol units, walk-through metal detectors at main gates, and emergency 
       response vehicles including a fire truck stationed at the motor pool. In addition to 
       routine security, the office actively supports disaster risk reduction efforts and 
       collaborates with other GSO units to ensure a safe and secure environment for the 
       Lasallian community.
      `,

      ["./Images/INFO/WEST/Establishments/SEC.webp"],
      "./AUDIOS/WEST/Establishments/SEC.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "KND-info") {
    showBuildingInfo(
      "KABALIKAT NG DLSU-D",

      `
       The Kabalikat ng DLSU-D, Inc. (KND) is the official association of non-teaching 
       personnel at De La Salle University-Dasmariñas. Established in April 1988 as a 
       fellowship group originally named Kapatiran ng Bagong Lakas ng Isipan, Kaunlaran at 
       Tatag (KABALIKAT) ng DLSU-EAC, it was later registered with the Securities and 
       Exchange Commission under its current name. KND is dedicated to promoting the welfare,
       needs, and collective interests of its members within the university community.
      `,

      ["./Images/INFO/WEST/Establishments/KND.webp"],
      "./AUDIOS/WEST/Establishments/KND.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  /* =================================================================================
         LANDMARKS (KEY FEATURES OF UD - NOT BUILDINGS BUT NOT ROADS EITHER) 
   ================================================================================= */

  if (marker.id === "OVL-info") {
    showBuildingInfo(
      "TRACK AND OVAL",

      `
       The Track Oval at De La Salle University-Dasmariñas is an Olympic-sized, seven-lane 
       facility located along the covered walkway from the Magdiwang Gate (Gate 3). It serves 
       as a venue for football, soccer, and track and field events, and is also used for mass 
       demonstrations and civic or cultural gatherings. Equipped with eight lighting poles, 
       the field is well-lit for both daytime and evening activities, making it a vital space 
       for sports and university-wide events.
      `,

      ["./Images/INFO/WEST/Landmarks/OVL.webp"],
      "./AUDIOS/WEST/Landmarks/OVL.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  if (marker.id === "UEC-info") {
    showBuildingInfo(
      "UNIVERSITY EVENTS CENTER",

      `
       The University Event Center at De La Salle University-Dasmariñas is a cozy outdoor 
       venue designed for student activities and gatherings. Located near the Junior High 
       School compound, it serves as a popular hangout spot during the day and transforms 
       into an inviting space for small concerts and evening events with its ambient lighting 
       and open-air charm.
      `,

      ["./Images/INFO/WEST/Landmarks/UEC.webp"],
      "./AUDIOS/WEST/Landmarks/UEC.mp3"
    );

    return; // ❌ Don't proceed to navigation logic
  }

  const virtualTourPlugin = viewer.getPlugin(VirtualTourPlugin);

  // Get the target node ID from the map
  const targetNodeId = markerToNodeMap[marker.id];

  // Navigate to the target node if it exists in the map
  if (targetNodeId) {
    console.log(`Navigating to: ${targetNodeId}`);
    virtualTourPlugin.setCurrentNode(targetNodeId);
  } else {
    console.warn(`Marker ID '${marker.id}' does not have a mapped node.`);
  }
});

// Log node change events
viewer
  .getPlugin(VirtualTourPlugin)
  .addEventListener("node-changed", ({ node, data }) => {
    console.log(`Navigated to ${node.id}`);
    if (data.fromNode) {
      console.log(`Previous node was ${data.fromNode.id}`);
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  viewer.addEventListener("ready", () => {
    const autorotate = viewer.getPlugin(AutorotatePlugin);
    autorotate.start();
  });

  // ✅ Show welcome box only after viewer is ready
  const welcomeBox = document.getElementById("welcome-box");
  if (welcomeBox) {
    welcomeBox.style.display = "flex"; // or 'block' based on your layout
    setTimeout(() => {
      welcomeBox.classList.add("show");
    }, 50); // just a tiny delay
  }

  const startBtn = document.getElementById("start-tour-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const autorotate = viewer.getPlugin(AutorotatePlugin);
      autorotate.stop(); // stop autorotation
      document.getElementById("welcome-box").style.display = "none";

      // 👇 Show sidebar but keep it collapsed
      const sideNav = document.getElementById("side-nav");
      sideNav.classList.add("show-sidebar"); // make it visible
      sideNav.classList.add("collapsed"); // keep it collapsed

      // ✅ Add class to indicate tour is actually started
      document.body.classList.add("tour-in-progress");

      const virtualTour = viewer.getPlugin(VirtualTourPlugin);
      virtualTour.setCurrentNode("Gate 1"); // 👈 this is your actual tour start
    });
  } else {
    console.warn("Start button not found");
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const nodeId = item.getAttribute("data-node");
      const virtualTour = viewer.getPlugin(VirtualTourPlugin);

      if (nodeId) {
        virtualTour.setCurrentNode(nodeId);
      }

      const sidebar = document.getElementById("side-nav");
      const latchIcon = document.querySelector("img");

      latchIcon.classList.remove("fa-chevron-left");
      latchIcon.classList.add("img");

      // You can call the toggleSubmenu function here to open the corresponding submenu
      toggleSubmenu(nodeId);
    });
  });

  document.querySelectorAll(".submenu-item").forEach((item) => {
    item.addEventListener("click", () => {
      const nodeId = item.getAttribute("data-node");
      const virtualTour = viewer.getPlugin(VirtualTourPlugin);

      if (nodeId) {
        // Navigate to the corresponding node
        virtualTour.setCurrentNode(nodeId);
      }

      // Close the extended sidebar and submenu after navigation
      const sidebar = document.getElementById("side-nav");
      const extendedSidebar = document.querySelector(".extended-sidebar");
      const latch = document.getElementById("sidebar-latch");

      // Hide the extended sidebar
      extendedSidebar.style.display = "none"; // Close the extended sidebar

      // Ensure the main sidebar is still open and collapsed
      sidebar.classList.remove("hide-sidebar");
      sidebar.classList.add("collapsed");

      // Reset any active submenu states (Optional)
      const allSubmenus = document.querySelectorAll(".extended-menu");
      allSubmenus.forEach((submenu) => {
        submenu.style.display = "none"; // Close all submenus when a menu item is clicked
      });

      // Handle latch visibility
      if (document.body.classList.contains("tour-in-progress")) {
        latch.style.display = "flex"; // Show latch if tour is running
      }

      // You can add any additional logic here to update UI or visual states after the node is navigated
    });
  });
});

// Initialize the audio state and the button
let isMuted = true; // Audio is muted initially
let audio = new Audio(); // Declare the audio object here to persist across function calls

/*=========================== SIDEBAR FUNCTION BUTTONS ===========================*/

/*=========================== SIDEBAR - NARRATIION-SOUND BUTTON ===========================*/

// Narrative button logic (Intro audio control)
let introAudio = new Audio("./AUDIOS/Intro.mp3"); // Audio for the narrative button (Intro)
let introIsMuted = false; // Track mute status for intro audio

const narrativeButton = document.getElementById("narrative-btn");

// Function to handle the narrative button click for audio play
narrativeButton.addEventListener("click", () => {
  if (introAudio.paused) {
    // Play the intro audio if it's not playing
    introAudio.play();
    narrativeButton.classList.add("playing"); // Change button state when audio is playing
    narrativeButton.querySelector("img").src = "./Images/INFO/sound-on.png"; // Change icon to sound-off
  } else {
    // Toggle mute
    toggleNarrativeMute();
  }
});

// Function to toggle mute/unmute for narrative audio
function toggleNarrativeMute() {
  if (introIsMuted) {
    introAudio.muted = false; // Unmute the audio
    narrativeButton.querySelector("img").src = "./Images/INFO/sound-on.png"; // Reset icon to original
    introIsMuted = false;
  } else {
    introAudio.muted = true; // Mute the audio
    narrativeButton.querySelector("img").src = "./Images/INFO/sound-off.png"; // Show muted icon
    introIsMuted = true;
  }
}

// Function to handle the end of the intro audio
introAudio.addEventListener("ended", () => {
  narrativeButton.classList.remove("playing");
  narrativeButton.querySelector("img").src = "./Images/INFO/narrative.png"; // Reset to original icon
});

/*=========================== SIDEBAR - VIDEO BUTTON ===========================*/

// Show the video overlay and play the video
document.getElementById("video-btn").addEventListener("click", function () {
  const videoOverlay = document.getElementById("video-overlay");
  const videoPlayer = document.getElementById("video-player");

  videoOverlay.style.display = "flex";
  videoPlayer.currentTime = 0; // Reset to start
  videoPlayer.play(); // Play the video
});

// Close the video overlay and stop the video
document
  .getElementById("close-video-btn")
  .addEventListener("click", function () {
    const videoOverlay = document.getElementById("video-overlay");
    const videoPlayer = document.getElementById("video-player");

    videoOverlay.style.display = "none";
    videoPlayer.pause(); // Pause the video
    videoPlayer.currentTime = 0; // Reset to beginning
  });

/*=========================== SIDEBAR - AMBIANCE-MUSIC BUTTON ===========================*/

// Get the sound button
const musicButton = document.getElementById("music-btn");
let isPlaying = false;
let currentTrackIndex = 0;

// Array of audio files
const ambianceTracks = [
  "./AUDIOS/Ambiance/music 1.mp3",
  "./AUDIOS/Ambiance/music 2.mp3",
  "./AUDIOS/Ambiance/music 3.mp3",
  "./AUDIOS/Ambiance/music 4.mp3",
  "./AUDIOS/Ambiance/music 5.mp3",
  "./AUDIOS/Ambiance/music 6.mp3",
  "./AUDIOS/Ambiance/music 7.mp3",
];

// Create the audio object
let ambianceAudio = new Audio();

// Set the initial volume (e.g., 30% of maximum volume)
ambianceAudio.volume = 0.3;

// Function to play the next audio track
function playNextTrack() {
  ambianceAudio.src = ambianceTracks[currentTrackIndex];
  ambianceAudio.play();
  ambianceAudio.addEventListener("ended", () => {
    // Go to the next track or loop back to the first track
    currentTrackIndex = (currentTrackIndex + 1) % ambianceTracks.length;
    playNextTrack();
  });
}

// Function to handle the sound button toggle
musicButton.addEventListener("click", () => {
  if (isPlaying) {
    // Pause the music
    ambianceAudio.pause();
    musicButton.querySelector("img").src = "./Images/INFO/music-off.png"; // Change to sound-on icon
  } else {
    // Start the music
    playNextTrack();
    musicButton.querySelector("img").src = "./Images/INFO/music-on.png"; // Change to sound-off icon
  }

  // Toggle the play/pause state
  isPlaying = !isPlaying;
});

// Function to show building info with dynamic button behavior
function showBuildingInfo(title, desc, imagePaths, audioSrc) {
  const box = document.getElementById("building-info-box");
  const titleEl = document.getElementById("building-info-title");
  const descEl = document.getElementById("building-info-desc");
  const galleryBtn = document.getElementById("view-gallery-btn");
  const galleryModal = document.getElementById("gallery-modal");
  const galleryCurrentImg = document.getElementById("gallery-current-img");
  const prevButton = document.getElementById("prev-image");
  const nextButton = document.getElementById("next-image");
  const buttonContainer = document.querySelector(".button-container"); // The container for the buttons
  const closeButton = document.getElementById("building-info-close");

  console.log(titleEl, descEl, galleryCurrentImg); // Debugging line to check if elements exist

  // Check if all elements exist before proceeding
  if (!titleEl || !descEl || !galleryCurrentImg || !prevButton || !nextButton) {
    console.error("Some necessary elements are not found.");
    return;
  }

  // Set the content
  titleEl.textContent = title;
  descEl.innerHTML = desc;

  // Set the audio source dynamically (using the audioSrc passed to the function)
  audio.src = audioSrc; // Assign the audio file to the audio instance
  audio.load(); // Load the audio file

  // Show the modal immediately
  box.style.display = "flex";
  setTimeout(() => {
    box.style.opacity = "1"; // Make it visible
    box.style.visibility = "visible"; // Ensure visibility
  }, 0); // Small delay for the fade-in effect

  // Ensure buttons are visible
  closeButton.style.display = "block"; // Show the close button
  closeButton.style.visibility = "visible"; // Make close button visible
  closeButton.style.opacity = "1"; // Ensure close button is visible

  // Show the buttons container with smooth fade-in effect
  galleryBtn.style.display = "block"; // Make the button container visible
  galleryBtn.style.opacity = "1"; // Ensure buttons are visible
  galleryBtn.style.visibility = "visible"; // Ensure visibility

  // Show the audio button
  const audioBtn = document.getElementById("audio-btn");
  audioBtn.style.display = "block";
  audioBtn.style.opacity = "1";
  audioBtn.style.visibility = "visible";

  // Reset the audio when reopening the modal
  audio.currentTime = 0; // Reset audio to the beginning
  let isMuted = true;
  audioBtn.querySelector("img").src = "./Images/INFO/mute-icon.png"; // Set to mute initially

  // Reset the audio button to its muted state (if muted)
  if (isMuted) {
    audioBtn.querySelector("img").src = "./Images/INFO/mute-icon.png"; // Set to mute initially
  } else {
    audioBtn.querySelector("img").src = "./Images/INFO/audio-icon.png"; // Set to audio initially
  }

  // Audio button functionality (Toggle mute/unmute)
  function toggleAudio() {
    if (isMuted) {
      // Unmute audio
      audio.play(); // Play audio
      audioBtn.querySelector("img").src = "./Images/INFO/audio-icon.png"; // Change to audio icon
      isMuted = false; // Set state to unmuted
    } else {
      // Mute audio
      audio.pause(); // Pause audio
      audioBtn.querySelector("img").src = "./Images/INFO/mute-icon.png"; // Change to mute icon
      isMuted = true; // Set state to muted
    }
  }

  // Attach event listener to the audio button
  audioBtn.removeEventListener("click", toggleAudio); // Remove any existing listener
  audioBtn.addEventListener("click", toggleAudio); // Reattach the listener to ensure it works correctly

  // Initialize image index
  let currentIndex = 0;

  // Function to update the displayed image
  function updateGalleryImage(index) {
    if (index >= 0 && index < imagePaths.length) {
      galleryCurrentImg.src = imagePaths[index];
      galleryCurrentImg.alt = title + " Gallery Image " + (index + 1);
      currentIndex = index;
    }

    // Update the visibility of the previous and next buttons
    toggleNavigationButtons();
  }

  // Show or hide navigation buttons based on image count
  function toggleNavigationButtons() {
    // If there's only one image, hide the navigation buttons
    if (imagePaths.length <= 1) {
      prevButton.style.display = "none"; // Hide the "Previous" button
      nextButton.style.display = "none"; // Hide the "Next" button
    } else {
      // Show the "Previous" and "Next" buttons if there are multiple ./images
      prevButton.style.display = "inline-block"; // Show the "Previous" button
      nextButton.style.display = "inline-block"; // Show the "Next" button
    }
  }

  // Reset previous event listeners and add new ones
  const newGalleryBtn = galleryBtn.cloneNode(true);
  galleryBtn.parentNode.replaceChild(newGalleryBtn, galleryBtn);

  newGalleryBtn.addEventListener("click", () => {
    galleryModal.style.display = "flex";
    updateGalleryImage(currentIndex); // Start from the first image
  });

  // Handle "Previous" Button Click
  prevButton.addEventListener("click", () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = imagePaths.length - 1; // Loop back to the last image
    }
    updateGalleryImage(prevIndex);
  });

  // Handle "Next" Button Click
  nextButton.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= imagePaths.length) {
      nextIndex = 0; // Loop back to the first image
    }
    updateGalleryImage(nextIndex);
  });

  closeButton.addEventListener("click", function () {
    // Reset the audio state when closing the modal
    audio.pause(); // Pause the audio
    const audioBtn = document.getElementById("audio-btn");
    audioBtn.querySelector("img").src = "./Images/INFO/mute-icon.png"; // Reset to mute icon
    isMuted = true; // Ensure it's muted
  });

  // Initial call to update navigation buttons visibility
  toggleNavigationButtons();
}

// Initialize the building info modal on page load
document.addEventListener("DOMContentLoaded", function () {
  const galleryBtn = document.getElementById("view-gallery-btn");
  const galleryModal = document.getElementById("gallery-modal");
  const closeGalleryBtn = document.getElementById("close-gallery");
  const buttonContainer = document.querySelector(".button-container");
  const closeButton = document.getElementById("building-info-close");
  const buildingInfoBox = document.getElementById("building-info-box");
  const audio = new Audio(); // Initialize the audio object

  // Ensure the modal and buttons are hidden initially
  buildingInfoBox.style.display = "none"; // Hide the modal
  buildingInfoBox.style.opacity = "0"; // Ensure opacity is 0 (hidden)
  buildingInfoBox.style.visibility = "hidden"; // Ensure visibility is hidden

  // Hide the buttons initially
  galleryBtn.style.display = "none";
  galleryBtn.style.visibility = "hidden";
  galleryBtn.style.opacity = "0";

  closeButton.style.display = "none";
  closeButton.style.visibility = "hidden";
  closeButton.style.opacity = "0";

  // Show modal and buttons when the gallery button is clicked
  galleryBtn.addEventListener("click", function () {
    buildingInfoBox.style.display = "flex"; // Show the modal
    setTimeout(() => {
      buildingInfoBox.style.opacity = "1"; // Make modal visible
      buildingInfoBox.style.visibility = "visible"; // Ensure visibility
    }, 0); // Small delay for the fade-in effect

    // Show buttons
    galleryBtn.style.display = "block"; // Show the gallery button
    galleryBtn.style.visibility = "visible"; // Make gallery button visible
    galleryBtn.style.opacity = "1"; // Ensure gallery button is visible

    closeButton.style.display = "block"; // Show the close button
    closeButton.style.visibility = "visible"; // Make close button visible
    closeButton.style.opacity = "1"; // Ensure close button is visible
  });

  // Close the gallery modal when the close button is clicked
  closeGalleryBtn.addEventListener("click", function () {
    galleryModal.style.display = "none"; // Hide the gallery modal
  });

  // Close the building info box when the "Close" button is clicked
  closeButton.addEventListener("click", function () {
    buildingInfoBox.style.opacity = "0"; // Hide modal
    buildingInfoBox.style.visibility = "hidden"; // Make modal invisible
    setTimeout(() => {
      buildingInfoBox.style.display = "none"; // Hide modal completely after fade
    }, 300); // Match the fade-out duration
  });
});
