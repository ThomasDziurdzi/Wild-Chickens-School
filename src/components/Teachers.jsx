import Card from "./Card";

function Teachers({ chickenTab }) {

   const filteredChicken = chickenTab.filter(chicken => chicken.position === "Teacher");

    return (
        <>
            {filteredChicken.map((chicken) => {
                return (
                    <Card
                key={chicken.id}
                image={chicken.imgSrc}
                name={chicken.name}
                position={chicken.position}
                biography={chicken.biography}
            />
                )
            })}
            
        </>
    )
}

export default Teachers;