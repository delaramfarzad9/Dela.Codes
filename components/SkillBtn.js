export default function SkillBtn({ skill, variant = "default" }) {
  const base =
    "px-4 py-2 rounded-lg text-gray-100 font-bold shadow-md hover:scale-105 active:scale-95 transition-transform duration-200 cursor-default select-none ";

  const styles = {
    default: "bg-sky-500 ",
    learning: "bg-gradient-to-r from-orange-400 to-pink-500/70   ",
    design: "bg-pink-600 ",
    tools: "bg-orange-500 ",
  };

  return <span className={`${base} ${styles[variant]}`}>{skill}</span>;
}
