import SkillBtn from "./SkillBtn";
export default function SkillSection({ 
  title, 
  items, 
  variant, 
  aos = "fade-right" 
}) {
  return (
    <div 
      data-aos={aos} 
      data-aos-duration="1500" 
      className="mt-12 w-full"
    >
      <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
        {title}
      </h2>

      <div className="flex flex-row flex-wrap gap-4 justify-center items-center xl:justify-start">
        {items.map((skill, index) => (
          <SkillBtn 
            key={index} 
            skill={skill} 
            variant={variant} 
          />
        ))}
      </div>
    </div>
  );
}
