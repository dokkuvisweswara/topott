import { useEpg, Epg, Layout } from "planby";
import { useState, useMemo } from "react";
import { motion } from "motion/react";

// Mock Data for EPG
const CHANNELS = [
  { uuid: "1", title: "Streamflix One", logo: "https://via.placeholder.com/100x100?text=S1" },
  { uuid: "2", title: "Global Sports", logo: "https://via.placeholder.com/100x100?text=GS" },
  { uuid: "3", title: "Cinema Max", logo: "https://via.placeholder.com/100x100?text=CM" },
  { uuid: "4", title: "Discovery Live", logo: "https://via.placeholder.com/100x100?text=DL" },
  { uuid: "5", title: "News 24", logo: "https://via.placeholder.com/100x100?text=N24" },
];

const PROGRAMS = [
  {
    id: "p1",
    channelUuid: "1",
    title: "Morning Show",
    description: "Start your day with the latest hits.",
    since: "2024-04-27T08:00:00",
    till: "2024-04-27T10:00:00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM8Vm7_VDsn_Kz1mm4MN3I3iQssRRQYIrSoZfUe80e6q-joGcC1eqUi97Kv7-ws55bDad9t6iOwlno0wtTseGBTFzKad71Eu-rxusZ5XuSs2YAequgSRPkbn8PR75hjzyMCeFnzrTqb5wHFEg4Rup4YGkgPNJD6hXf1l_4ARBaLdJNIoxGdGIcFCRRfTN-B-F79LKAyUV7nvqZKQ4unTD5P1ENDZ5Qx0B1z_MqgGrUuc_nU9Wbr97F2c79Lrh4hgl9-Q6f7hhRIqQB"
  },
  {
    id: "p2",
    channelUuid: "1",
    title: "Afternoon Movie",
    description: "A classic movie for your afternoon.",
    since: "2024-04-27T10:00:00",
    till: "2024-04-27T13:00:00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaGtcojlihpRoep--d8egGwOIwrM9pNrIe9ni6dEWTGUDYE_z02Y5BM2fzh7GlTLHLq7yK57vUADa9eow_EC1csj-E0WbzyMccfQwdHB5Np1zlih_a42xRGcn5Yfij8RMsdeR1CIaEbDf7Aq1-IGtUdd0kHskK7MEAepPS3KA0rULcSHrHPqBhKqLlBkijb3PTmcLQUTTB84HfZtSgTUpdTF2GCDVjO_FZuRBDyO1duNxSDimmr7Y5HfFfiHEwXzWKduQLxjp_8_TK"
  },
  {
    id: "p3",
    channelUuid: "2",
    title: "Live Football",
    description: "Catch the match live only on sports.",
    since: "2024-04-27T09:00:00",
    till: "2024-04-27T11:30:00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByk0wcsu7Y5PWYLEhV1vUvRImAJzVVD1_7p2RYnN8pSiMU50L3q1m8gof4Hnnzo49wF7bbmMDkrpzGSA_vEeToHzIVvBdZCsg8694hwt_IS1IrIYOlRpjO4zGrAViAhWBgQx7lRjOC-_YZ49YSJ2wDuXath_CjaO-kVHbroVr8f-wQbQAtu2cig-jsnRWIswJYObL2IEvGo-eWWk-lEBnGzSWaRhuN9X9dTi2GBQf2ciDj_msnNrq2f5WG6-e5NHeBQ7ptbnneLBk7"
  },
  {
    id: "p4",
    channelUuid: "3",
    title: "Action Marathon",
    description: "Back to back action movies.",
    since: "2024-04-27T08:00:00",
    till: "2024-04-27T20:00:00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK-dmgWgy8w0s4Vq-VX7sIZoXkt5h81gRJNMzXUesd_9v8udZ6iiej24EJ7ciOR-BIrWujVgETju1JF-jjmutrv9raXmoc32NzRJ_vJjdyrMJUvRgkvBJ_EzLWNCgsM85ovVJMnZWklvhVAOf-Gt9Oi0jZXQsoJCVZ2EDofnQu4lRHZFQzyS829hl-DKFWLdj7nWzQttf8WzpgDZ779cPMhVOn_5NmGsj6vYt9rpDAyxT1X2hCbVzKT_gBlV51ccNefE7KW_Beqmlu"
  },
];

export default function EpgPage() {
  const { getEpgProps, getLayoutProps } = useEpg({
    channels: CHANNELS,
    epg: PROGRAMS,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: "2024-04-27T00:00:00",
    endDate: "2024-04-27T24:00:00",
  });

  return (
    <div className="pt-32 pb-20 px-8 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-5xl font-black text-white mb-4">EPG Guide</h1>
          <p className="text-gray-400 text-lg">Electronic Program Guide for all your favorite channels.</p>
        </div>

        <div className="h-[600px] border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl">
          <Epg {...getEpgProps()}>
            <Layout
              {...getLayoutProps()}
              renderChannel={({ channel }) => (
                <div key={channel.uuid} className="flex items-center justify-center h-full border-r border-white/5 bg-[#1a1a1a]">
                  <span className="text-[10px] font-bold text-white uppercase text-center">{channel.title}</span>
                </div>
              )}
              renderProgram={({ program, isLive, isSelected }) => (
                <motion.div 
                  key={program.id}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    flex flex-col p-4 h-full border-r border-white/5 transition-colors cursor-pointer
                    ${isLive ? "bg-blue-600/20 border-l-2 border-l-blue-500" : "bg-white/5 hover:bg-white/10"}
                  `}
                >
                  <p className="text-xs font-bold text-white truncate">{program.title}</p>
                  <p className="text-[10px] text-gray-500 truncate mt-1">
                    {new Date(program.since).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(program.till).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </motion.div>
              )}
              renderTimeline={({ time }) => (
                <div className="flex items-center justify-center border-b border-white/10 bg-[#131212] pt-2 pb-1">
                  <span className="text-[10px] font-bold text-gray-400">{time}</span>
                </div>
              )}
            />
          </Epg>
        </div>
      </div>
    </div>
  );
}
