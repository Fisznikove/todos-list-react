import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
        <div className="section__conteiner">
            <h2 className="section__header"> {title} </h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;