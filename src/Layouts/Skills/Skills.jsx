import CardSkill from "../../Components/SkillCard/CardSkill";

const Skills = () => {
 return(
  <div>
    <h2 className="text-3xl text-center">Skill</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
    <CardSkill/>
    <CardSkill/>
    <CardSkill/>
    <CardSkill/>
    <CardSkill/>
    <CardSkill/>
  </div>
  </div>
 )
   
};

export default Skills;
