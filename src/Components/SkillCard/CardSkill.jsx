import { Heat } from "@alptugidin/react-circular-progress-bar";

const CardSkill = () => {
    return (
        <div className="w-52 mx-auto">
        <Heat
          progress={10}
          text={"Marketing"}
          sx={{
            bgColor: "#ffffff",
            textColor: "#4b5563",
            barWidth: 5,
          }}
        />
      </div>
    
    );
};

export default CardSkill;