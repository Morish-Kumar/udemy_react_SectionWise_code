import MyParagraph from "./MyParagraph"
const DemoOutput = (props) => {
    console.log("DemoOutput running") // this will be changing for every clicks
    return <MyParagraph>{props.show ? 'this is a paragraph': ""}</MyParagraph>
}

export default DemoOutput