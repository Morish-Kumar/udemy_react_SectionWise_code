const MyParagraph = (props) => {
    console.log("MyParagraph running") // this will be changing for every clicks
    return <p>{props.children}</p>
}

export default MyParagraph