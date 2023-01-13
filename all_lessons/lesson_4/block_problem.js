// 1. Start with:
//   - A count of the 'number of blocks remaining' equal to the input
//   - A count of the 'current layer' equal to 0
// 2. Calculate the number for the 'next layer' by adding 1 to the
// value for the 'current layer'

// 3. Using the number for the 'next layer',
// calculate the 'number of blocks required' to
// build that layer, by multiplying the number by itself

// 4. Determine if the 'number of blocks remaining' is
// greater than or equal to the 'number of blocks required'
// to build the layer

//   - If it is:
//     - Subtract the 'number of blocks required' from the 'number of blocks remaining'
//     - Increment the 'current layer' by 1
//     - Go back to Step 2
//   - If it isn't:
//     - Return the 'number of blocks remaining'

function calculateLeftOvers()

blocksRemaining = Input
currentLayer =
