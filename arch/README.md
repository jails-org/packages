# arch

A uni-directional architecture inspired in Elm & Redux. It integrates `store` and `reactor` to be used in components.

- For more information about template system : [soda-js](https://github.com/AlloyTeam/sodajs)
- For more information about store : [store](https://github.com/jails-org/Packages/tree/master/store)

## Usage


### Markup
```html
    <div data-component="my-component">
        <p>My name is :<span soda-html="user"></span></p>
    </div>
```

### Js Component
```js
import jails from 'jails'
import arch from 'jails.packages/arch'

jails('my-component', ( {init, arch} ) => {

    init(()=>[
        printuser
    ])

    //After this call, html view will be automatically updated
    const printuser = () =>
        localstore.dispatch('SETNAME', { name :'Peter Parker' })

    const localstore = arch({
        model,
        actions,
        // store
        // A existing store can be passed as default store to be augmented
        // instead of returning a brand new store
    })
})

const model = {
    user :''
}

const actions = {
    SETNAME :( state, payload ) => ({
        user :payload.name
    })
}

jails
    .extends( arch() )
    .start()
```