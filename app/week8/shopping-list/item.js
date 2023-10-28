
export default function Item({name, quantity, category, onClick}) {
    
    return (
        <>
        <div className="border border-sky-500 hover:bg-sky-500 bg-yellow-100 w-full max-w-xs m-4 p-2 rounded cursor-pointer" onClick={() => onClick(name)}>

            <h1 class="text-2xl font-bold">{name}</h1>                                      
            <p>Buy {quantity} in {category}</p>
       
        </div>
        </>
    );
};