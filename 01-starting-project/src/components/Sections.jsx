export default function Section ({tiltle, children, ...props}){
    return (
        <section {...props}>
            <h2>{tiltle}</h2>
                {children}
        </section>
    );
}