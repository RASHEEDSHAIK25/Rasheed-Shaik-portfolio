import { usePortfolio } from "@/context/PortfolioContext";

const accentMap = {
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/15",
    border: "border-cyan-500/30",
    gradient: "from-cyan-500 to-violet-600",
    glow: "bg-cyan-500/20",
  },
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-500/15",
    border: "border-violet-500/30",
    gradient: "from-violet-500 to-fuchsia-600",
    glow: "bg-violet-500/20",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/30",
    gradient: "from-amber-500 to-orange-600",
    glow: "bg-amber-500/20",
  },
};

export function useAccent() {
  const { role } = usePortfolio();
  return accentMap[role.accent];
}
