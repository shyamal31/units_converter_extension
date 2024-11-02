/**
 * @async
 * @function get_conversions
 * @param {Object} selection
 * @returns results of conversions
 */
async function get_conversions (selection) {
  // Regular expression to match the numerical part and optional space
  const numSpace_RE = new RegExp(
    /((^[\-−]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?))\s*/
  )
  let result = ''

  // if (/^(0?[0-9]|1[0-9]|2[0-4]):([0-5][0-9])$/.test(selection)){
  // 	console.log("Is it running?");
  // 	result = getAllTimeConversions(selection);
  // 	// console.log(result);
  // }

  if (/\b\d{1,2}:\d{2}\s*(?:am|pm)?\b/i.test(selection)) {
    result = getAllTimeConversions(selection)
  } else {
    const listOfUnits = await getAllUnits()
    listOfUnits.forEach((unitObject) => {
      const aliases = unitObject.aliases.sort(descending_length)
      for (let i = 0; i < aliases.length; i++) {
        var measure_RE
        // condition to handle PRE_SYMBOLS correctly in our generalized regex expression
        if (PRE_SYMBOLS.has(aliases[i])) {
          const s =
					'((^' +
					'\\' +
					aliases[i] +
					'\\s*[\\-−]?(?:\\d+|\\d{1,3}(?:,\\d{3})+)(?:(\\.|,)\\d+)?))\\s*'
          measure_RE = RegExp(s, 'i')
        } else {
          measure_RE = RegExp(numSpace_RE.source + aliases[i] + '$', 'i')
        }
        // console.log(measure_RE)
        var matches = selection.match(measure_RE)
        // console.log(matches);
        if (matches != null && matches[0] != null) {
          // let quantity = eval(matches[1].replaceAll(",", "").replace("−", "-"));
          matches = matches[1].toLowerCase()
          // let quantity=matches.replace(aliases[i],'')
          const quantity = matches
            .replace(aliases[i], '')
            .replaceAll(',', '')
            .replace('−', '-')
          // console.log(quantity)
          const precision = getPrecision(Number(quantity))
          // console.log(unitObject.type,unitObject.unit)
          const conversion_class = get_conversion_class(
            unitObject.type,
            unitObject.unit
          )
          if (unitObject.type == 'currency') {
            result = (async () => {
              const std_converison = await conversion_class.getStandardConversion(
                quantity
              )
              return await conversion_class.getAllConversions(
                Number(std_converison),
                precision
              )
            })()
            // console.log(result)
          } else if (unitObject.type == 'temperature') {
            const std_converison = conversion_class.getStandardConversion(quantity)
            // console.log("Standard Conversion: - ",std_converison);
            result = conversion_class.getAllConversions(
              Number(std_converison),
              precision
            )
          } else {
            const std_converison = getStandardConversion(unitObject, quantity)
            // console.log("Standard Conversion: - ",std_converison);
            result = getAllConversions(
              Number(std_converison),
              precision,
              unitObject,
              listOfUnits
            )
            // console.log("Result from Parser Script: ",result);
          }
        }
      }
    })
  }

  // const result_final = {
  //     result,object_type
  // };
  return result
}
