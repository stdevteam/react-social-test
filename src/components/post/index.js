export default function Post(props) {
    const {title, text, count} = props.props;

    return (
        <div className={"post"}>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>Reactions :{count}</p>
        </div>
    )
}
