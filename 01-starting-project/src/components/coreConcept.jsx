
import Coreconcepts from "./Coreconcepts"
import { CORE_CONCEPTS } from "../data"

export default function Coreconcept(){
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <Coreconcepts key={conceptItem} {...conceptItem} />
            ))}
          </ul>
        </section>
    );
}
