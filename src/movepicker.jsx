import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Movepicker extends Component {

    static propTypes = {
        tagName: PropTypes.string,
        resetOnLeave: PropTypes.boolean,
        randomize: PropTypes.boolean,
        listLength: PropTypes.number,
        onChange: PropTypes.func
    }

    static defaultProps = {
        tagName: 'div',
        resetOnLeave: false,
        randomize: false,
        listLength: 0,
        onChange: () => {}
    }

    static lastSelected = null

    pick(e) {
        console.log(this.container)
        // let relativeX = (e.pageX - offset.left)
        // var relativeY = (e.pageY - offset.top)
        //
        // let selected = this.lastSelected

        //
        // let lastMovedDistance = this.lastMovedDistance
        // let newMovedDistanced = e.pageX + e.pageY
        //
        // let movedDistanced = Math.abs(lastMovedDistance - newMovedDistanced)
        //
        // // 2 each seconds, 3 each third, 4 each fourth
        // const reactOnZero = movedDistanced % 2
        //
        // if (reactOnZero !== 0) {
        //     return null
        // }
        //
        // let currentShownPos = Math.floor(Math.random() * this.props.list.length)
        //
        // this.props.onRandomSelected()

        if (this.lastSelected !== selected) {
            this.props.onChange()
        }
    }

    render() {

        let Tag = this.props.tagName

        let listOfDelete = ['tagName', 'resetOnLeave', 'listLength', 'onChange', 'randomize']

        let props = Object.assign({}, this.props)

        for (toDelete of listOfDelete) {
            delete props[toDelete]
        }

        return (
            <Tag
                ref={ref => this.container = ref}
                onMouseMove={this.pick.bind(this)}
                onTouchMove={this.pick.bind(this)}
                {...props}
            >
                {this.props.children}
            </Tag>
        )
    }
}
