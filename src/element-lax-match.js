/**
 * Checks if `target` element is passed `element` or one of its children within passed context
 * @method elementLaxMatch
 * @param {HTMLElement} target			 	Target element
 * @param {HTMLElement} element			 	Reference element
 * @param {Window|HTMLElement} [context]	Context to limit element lookup, default to document.documentElement
 * @return {Boolean} Passed element matches reference element
 * @static
 */
export default function elementLaxMatch(target, element, context){
	if(target == element || target.parentElement == element){
		return true;
	}

	if(!context){
		context = document.documentElement;
	}

	if(target.parentElement == context){
		return false;
	}

	return elementLaxMatch(target.parentElement, element);
}
