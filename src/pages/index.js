import React, { Component } from "react"
import axios from "axios"
import styled from "styled-components"
import '../css-reset.css'

export class index extends Component {
  state = {
    quote: "",
    author: "",
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    axios.get(url).then(res => {
      let data = res.data.quotes
      let quoteNum = Math.floor(Math.random() * data.length)
      let randomQuote = data[quoteNum]

      this.setState({
        quote: randomQuote["quote"],
        author: randomQuote["author"],
      })
    })
  }

  getNewQuote = () => {
    this.getQuote()
  }
  render() {
    return (
      <div>
        <TitleCont>
            <Title>Quote of the Day</Title>
        </TitleCont>
        <div>
          <QuoteBox id="quote-box">
            <Quote id="text">{this.state.quote}</Quote>
            <Author id="author">{this.state.author}</Author>
            <Button onClick={this.getNewQuote} id="new-quote">
              {" "}
              Click for New Quote
            </Button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">
              Tweet Quote
            </a>{" "}
          </QuoteBox>
          <Image src="https://thumbs.gfycat.com/AshamedUnlinedCheetah.webp" alt="wave"/>
        </div>
      </div>
    )
  }
}
const QuoteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  flex-direction: column;
  margin-top: 8.5vh;
  height: 70vh;
  max-width:70vw;
  margin-left:15vw;
`
const Image = styled.img`
min-width:100vw;
max-height:16vh;
object-fit: cover;
position:absolute;
bottom:0vh;
`
const Quote = styled.h1`
font-size:2em;
border:2px solid black;
display:flex;
flex-direction:column;
max-width:20em;
padding:1.5em;
margin-bottom:2vh;
`
const Author = styled.h2`
font-size:1.5em;
font-style:italic;
margin-bottom:2vh;
`

const Title = styled.h1`
font-size:3em;
 
width:100%;
      
      margin: 0 auto;
      text-align: center;
      
      color:#313131;
      font-size:45px;
      font-weight: bold;
      position: absolute;
      animation:colorchange;
      -webkit-animation:colorchange 8s infinite alternate;
      
`

const TitleCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid black; */
  height:12vh;
  background:black;
`
const Button = styled.button`
  padding: 1em;
  background-color: lightblue;
  font-size: 11px;
  margin-bottom:1em;    
`

export default index
