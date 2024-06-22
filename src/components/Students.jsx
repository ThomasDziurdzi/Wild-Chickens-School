import Card from "./Card";

function Students ({chickenTab}) {

    const filteredChicken = chickenTab.filter(chicken => chicken.position === "Student");

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

export default Students;