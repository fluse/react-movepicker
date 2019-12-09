import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { aspectRatio, getPercentages, round } from './helper'

export default class Movepicker extends PureComponent {

    static propTypes = {
        tagName: PropTypes.string,
        resetOnLeave: PropTypes.bool,
        randomize: PropTypes.bool,
        hideElement: PropTypes.bool,
        createOwnElement: PropTypes.bool,
        list: PropTypes.number.isRequired,
        onSwitch: PropTypes.func
    }

    static defaultProps = {
        tagName: 'div',
        resetOnLeave: false,
        randomize: false,
        hideElement: false,
        createOwnElement: true,
        list: 0,
        onSwitch: () => {}
    }

    static lastSelected = null

    getPosition(e, rect) {

        let y = parseInt(round(e.pageY - rect.top - document.documentElement.scrollTop).toFixed(0))
        let x = parseInt(round(e.pageX - rect.left - document.documentElement.scrollLeft).toFixed(0))

        if (y <= 0) y = 0
        if (x <= 0) x = 0

        if (y > rect.height) y = rect.height
        if (x > rect.width) x = rect.width

        return { x, y }
    }

    pick(e) {

        const rect = this.container.getBoundingClientRect()

        let position = this.getPosition(e, rect)

        let ratio = aspectRatio(rect)

        let percentages = getPercentages(ratio)

        let calculated = {
            x: (this.props.list * percentages.x) / 100 * position.x,
            y: (this.props.list * percentages.y) * position.y
        }

        console.log(position, calculated)

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

        // if (this.lastSelected !== selected) {
        //     this.props.onSwitch()
        // }
    }

    getProps() {

        let internalProps = ['tagName', 'resetOnLeave', 'hideElement', 'list', 'onSwitch', 'randomize' ,'createOwnElement']

        let props = Object.assign({}, this.props)

        props.ref = (ref) => {
            this.container = ref
        }

        props.onMouseMove = this.pick.bind(this)
        props.onTouchMove = this.pick.bind(this)

        // remove internal properties
        for (let currentProp of internalProps) {
            delete props[currentProp]
        }

        return props
    }

    render() {

        if (this.props.hideElement) {
            return null
        }

        let props = this.getProps()

        if (this.props.createOwnElement) {

            let Tag = this.props.tagName

            return (
                <Tag {...props}>
                    {this.props.children}
                </Tag>
            )
        }

        return React.cloneElement(this.props.children, {...props})
    }
}
