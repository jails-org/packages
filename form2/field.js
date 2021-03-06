import validator from '../validator'
import { getRules, formatError, debounce } from './utils'

const INPUT = 'input[data-rules]:not([type="checkbox"]):not([type="radio"])'
const SELECTABLE = 'input[data-rules][type="checkbox"],input[data-rules][type="radio"],select[data-rules]'

export default function formField ({ main, elm, msg, injection, emit, update, trigger }) {

	const { validators } = injection

	main( _ => [
		events,
		exposing
	])

	const events = ({ on }) => {
		on('input', INPUT, debounce(onchange, 250))
		on('blur', INPUT, onblur)
		on('change', SELECTABLE, onblur)
		on('focus', `${INPUT}, ${SELECTABLE}`, onfocus)
	}

	const exposing = ({ expose }) => {
		expose({ map })
	}

	/**
	 * @function change
	 * @param {*} event
	 */
	const onchange = (event) => {
		const { name, value } = event.target
		validator({ [name]: getRules(event.target) }, validators)
			.then(_ => {
				msg.set(s => {
					s.error = null
					s.isValid = Boolean(value)
					s.value = value
				})
			})
			.catch( _ => msg.set( s => {
				s.isValid = false 
				s.value = value
			}))
			.finally( emitchange )
	}

	/**
	 * @function blur
	 * @param {*} event
	 */
	const onblur = (event) => {
		const { name, value } = event.target
		const isCheckbox = event.target.type == 'checkbox'
		validator({ [name]: getRules(event.target) }, validators)
			.then(_ => {
				msg.set(s => {
					s.error = null
					s.isValid = Boolean(value)
					s.focus = false
					s.value = isCheckbox? (event.target.checked? value: '') : value
				})
			})
			.catch(errors => {
				msg.set(s => {
					s.error = formatError(errors[name])
					s.isValid = false
					s.focus = false
					s.value = isCheckbox? (event.target.checked? value: '') : value
				})
			})
			.finally( emitchange )
	}

	const emitchange = () => {
		emit('form-field:change', { element: elm, state: msg.getState() })
	}

	/**
	 * @function touched
	 * @param {*} event
	 */
	const onfocus = (event) => {
		msg.set( s => {
			s.focus = true
			s.touched = true
		})
	}

	const map = (fn) => { 
		fn( msg.getState() )
	}

	update( props => {
		const field = elm.querySelector('input,select,textarea')
		msg.set( s => {
			s.data = props.data 
			s.value = !s.touched? field.dataset.initialValue: s.value
			if( s.value && !s.touched ) {
				setTimeout(_ => {
					trigger('input', `[name=${field.name}]`)
					trigger('change', `[name=${field.name}]`)
					s.value = field.value
				})
				s.touched = true 
			}
		})
	})
}

export const model = {
	touched: false,
	focus  : false,
	error  : null,
	isValid: true,
	value  : undefined,
	data   : {}
}

export const view = (state) => {
	const touched = state.touched? 'touched' : ''
	const error   = state.error? 'error' : ''
	const focus   = state.focus? 'focus' : ''
	return Object.assign({}, state, {
		fieldClass : `${touched} ${error} ${focus}`.trim()
	})
}
