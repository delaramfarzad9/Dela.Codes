import SkillBtn from "./SkillBtn";
export default function SkillSection({ 
  title, 
  items, 
  variant, 
   
}) {
  return (
    <div 
      
      className="mt-12 w-full"
    >
      <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
        {title}
      </h2>

      <div className="flex flex-row flex-wrap gap-4 justify-center items-center xl:justify-start">
        {items.map((skill) => (
          <SkillBtn 
            key={skill} 
            skill={skill} 
            variant={variant} 
          />
        ))}
      </div>
    </div>
  );
}
