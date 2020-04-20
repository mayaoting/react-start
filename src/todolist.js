import React from 'react'

class TodeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasDoneList: ['看书', '跑步', '仰卧起坐', '俯卧撑'], // 已经做了的
            noDoneList: ['node', 'python', 'angular', 'react-native'], // 还没开始的
            value: '' // 输入框的值
        }
    }

    successThing = (index, event) => {  // 当传递参数时，要带上this,之后的参数默认排在前面，event对象在后面
        var temp = this.state.noDoneList
        var addDone = this.state.hasDoneList
        addDone.push(temp[index])
        temp.splice(index, 1)
        this.setState({
            noDoneList: temp,
            hasDoneList: addDone
        })
    }
    failThing = (index, event) => {
        var temp = this.state.noDoneList
        var addDone = this.state.hasDoneList
        temp.push(addDone[index])
        addDone.splice(index, 1)
        this.setState({
            noDoneList: temp,
            hasDoneList: addDone
        })
    }
    getInputValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    saveData = () => {
        if (!this.state.value) {
            alert('请先输入值')
        } else {
            var temp = this.state.noDoneList
            temp.push(this.state.value)
            this.setState({
                noDoneList: temp,
                value: ''
            })
        }

    }
    deleteList = (index) => {
        var temp = this.state.noDoneList
        temp.splice(index, 1)
        this.setState({
            noDoneList: temp
        })
    }
    deleteListDone = (index) => {
        var temp = this.state.hasDoneList
        temp.splice(index, 1)
        this.setState({
            hasDoneList: temp
        })
    }

    render() {
        return (
            <div>
                <h3>新增代办事项</h3>
                <input type="text" value={this.state.value} placeholder={'新增事项'} onChange={this.getInputValue}/>
                <button onClick={this.saveData}>确定</button>
                <h3>计划但是未完成的</h3>
                {
                    this.state.noDoneList.map((value, index) => {
                        return (
                            <div key={index}>
                                {/*输入框需有一个key，不然会留有缓存影响其他输入框*/}
                                <input type="checkbox" key={value} onChange={this.successThing.bind(this, index)}/>
                                <span>{value}</span>
                                <span onClick={this.deleteList.bind(this, index)}>X</span>
                            </div>
                        )
                    })
                }
                <h3>已经完成了的</h3>
                {
                    this.state.hasDoneList.map((value, index, array) => {
                        return (
                            <div key={index}>
                                <input checked={true} key={index} type="checkbox"
                                       onChange={this.failThing.bind(this, index)}/> <span>{value}</span>
                                <span onClick={this.deleteListDone.bind(this, index)}>X</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TodeList