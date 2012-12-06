# jquery.mobile.fastButtons

<table>
	<tr>
    	<td>Author:</td>
	    <td>Justin McCandless (www.justinmccandless.com)</td>
	</tr>
	<tr>
	    <td>Demo/Metrics:</td>
	    <td>http://www.justinmccandless.com/demos/jquery.mobile.fastButtons/index.html</td>
	</tr>
	<tr>
	    <td>Latest Blog Post:</td>
	    <td>http://justinmccandless.com/blog/jQueryMobile+Plugin+to+Improve+iOS+Click+Speed</td>
	</tr>
	<tr>
	    <td>jQuery:</td>
	    <td>1.6.4+</td>
	</tr>
	<tr>
	    <td>jQuery Mobile:</td>
	    <td>1.0.1+</td>
	</tr>
	<tr>
	    <td>Contact:</td>
	    <td>justinjmccandless@gmail.com</td>
	</tr>
</table>


This jQuery Mobile plugin makes click events faster, especially on iOS.  By default in jQuery Mobile buttons the 'click' event is used.  This event has a significant delay in iOS in order to distinguish it from other events.  In native apps, however, clicking a button happens significantly faster.  So, this plugin simply replaces 'click' events on document with jQuery Mobile's much faster 'vclick'.


## Usage:

Simply include this file after the jQuery Mobile javascript file and you're good to go!

## Metrics

Included in the repository are two html files.  These allow you to compare the response times of 'click' and 'vclick' in whatever browser you use, as well as to try a jQuery Mobile page transition with and without jquery.mobile.fastButtons.  I encourage you to try them out on your own devices to see the kind of speed increases you can expect, but I've included some of my own data below to put things into perspective.

<table>
	<tr>
    	<td>Environment</td>
	    <td>'click' Response Time (ms)</td>
		<td>'vclick' Respnse Time (ms)</td>
	</tr>
	<tr>
	    <td>Firefox 17.01, Linux</td>
	    <td>6</td>
		<td>7</td>
	</tr>
	<tr>
	    <td>Firefox 17.01, Linux</td>
	    <td>5</td>
		<td>6</td>
	</tr>
	<tr>
	    <td>Firefox 17.01, Linux</td>
	    <td>7</td>
		<td>9</td>
	</tr>
	<tr>
	    <td>Mobile Safari, iOS 6.0 iPhone Simulator</td>
	    <td>402</td>
		<td>48</td>
	</tr>
	<tr>
	    <td>Mobile Safari, iOS 6.0 iPhone Simulator</td>
	    <td>410</td>
		<td>56</td>
	</tr>
	<tr>
	    <td>Mobile Safari, iOS 6.0 iPhone Simulator</td>
	    <td>434</td>
		<td>80</td>
	</tr>
</table>

