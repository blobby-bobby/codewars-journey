// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){

    const urlPattern = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?/
    const domains = url.match(urlPattern)
    return domains[1]

}

