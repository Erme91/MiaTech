function ItemList() {
    const items = ["Computer", "Televisione", "Tablet", "Penna digitale", "Smartphone"];

    return (
        <>
            <h3>Technological devices</h3>
            <ul>
                {
                    items.map((device, i) => (
                        <li key={i}>{device}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ItemList