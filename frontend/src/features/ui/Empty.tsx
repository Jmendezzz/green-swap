import { HiOutlineEmojiSad } from "react-icons/hi"
import Row from "./Row"
import Heading from "./Heading"

interface Props{
    message: string
}
function Empty({message}: Props) {
  return (
    <Row type="vertical">
        <HiOutlineEmojiSad className="text-8xl text-gray-400"/>
        <Heading type="h2">{message}</Heading>
    </Row>
  )
}

export default Empty