
/**
 * Make a search index string by removing duplicated words
 * and removing less useful, common short words
 *
 * @param {String} text
 */

module.exports = function(text) {
  let result = "";

  for(i=0;i<text.length;i++) {
    result += text[i].title + ", " + text[i].affiliation + "; ";
  }

  result = result.slice(0, -2);

  return result;
}

