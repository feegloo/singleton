# singleton

only for 0 parameters fn

```
import singleton from 'singleton-fn'

const fn = () => ({foo:1})

const s = singleton(fn)

const a = s()
const b = s()

console.log(a === b) // true
```
