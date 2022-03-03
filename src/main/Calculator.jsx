import {Component} from 'react'
import Button from '../Components/Button'
import Display from '../Components/Display'
import './Calculator.css'

export default class Calculator extends Component {

    clearMemory(){
        console.log("limpar")
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={100}/>
                <Button label="A/C" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>   
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}