"use strict";function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}console.log("JS Loaded"),$(function(){var a=$("#play"),n=($("#answer"),$("#anagram1")),e=($("#anagram2"),$("#anagram3"),$("#anagram4"),$("#anagram5"),$("#anagram6"),$("#anagram7"),$("#anagram8"),$("#anagram9"),$("#anagram10"),$("#BBT").val()),o=$("#LOTR").val(),s=$("#EPL").val(),l=$("#ASIA").val(),c=$("#WDI").val(),t=$("#easy").val(),r=$("#medium").val(),i=$("#hard").val(),d=$("#insane").val();e=["sheldon","leanord","spock","cheescakefactory","howard","startrek","penny","koothrapoli","bernadette","physics","laundry","halonight","dumplings","brisket","nasa","stringtheory","darkmatter","comiccon","comicbook"],o=["arragon","gimli"];var u=null,h=null;$("#subject-options").on("change",function(){switch(h=$("#subject-options option:checked").val()){case"$BBT":h=e;break;case"$LOTR":h=o;break;case"$EPL":h=s;break;case"$WDI":h=c;break;case"$ASIA":h=l;break;default:alert("AAAAAAAAAHHHHHHH!!!!!!")}}),$("#difficulty-options").on("change",function(){switch(u=$("#difficulty-options option:checked").val()){case"easy":u=t;break;case"medium":u=r;break;case"hard":u=i;break;case"insane":u=d;break;default:alert("AAAAAAAAHHHHH!!!!!")}}),a.on("click",function(){console.log("heyo!"),h=h[Math.floor(Math.random()*h.length)];var a=0;$("#submit").on("click",function(){$("#answer").val()===h?(n.text(h).css("display","hidden"),a=+h.length,n.addClass("animated fadeOutLeft").css("color","green"),console.log(a),console.log("working")):n.addClass("animated wobble").css("color","red")});var e=null;e=h.split("").sort(function(){return.5-Math.random()}).join(""),function(){var a=setInterval(function(){n.text(e).css("top","+=10px"),console.log("heyyoo!"),$("#answer").val()===h&&(clearInterval(a),console.log("yeas James!"))},2e3)}()})});var Subject=function a(){_classCallCheck(this,a)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiJCIsIiRwbGF5R2FtZSIsIiRhbmFncmFtMSIsIiRhbmFncmFtOCIsIiRpbnB1dEJ5VXNlciIsInZhbCIsIiRhbmFncmFtOSIsIiRhbmFncmFtMTAiLCIkQVNJQSIsIiRCQlQiLCIkRVBMIiwiJFdESSIsIiRJTlNBTkUiLCIkTUVESVVNIiwiJExPVFIiLCJzZWxlY3RlZERpZmZpY3VsdHkiLCJzZWxlY3RlZFN1YmplY3QiLCJvbiIsImFsZXJ0IiwiJEhBUkQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjdXJyZW50U2NvcmUiLCJ0ZXh0IiwiY3NzIiwiYWRkQ2xhc3MiLCJzY3JhbWJsZWRXb3JkIiwic29ydCIsImpvaW4iLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJTdWJqZWN0Il0sIm1hcHBpbmdzIjoieUhBQUFBLFFBQVFDLElBQUksYUFDWkMsRUFBRSxXQUNBLEdBQU1DLEdBQVlELEVBQUUsU0FEcEJFLEdBRXFCRixFQUFFLFdBRmpCQSxFQUFBLGNBV0FHLEdBVmNILEVBQUEsYUFDZEksRUFBZUosYUFLSEEsRUFBRSxhQUhBQSxFQUFBLGFBQ0FBLEVBQUEsYUFDQUEsRUFBQSxhQUNBQSxFQUFBLGFBQ0FBLEVBQUEsYUFDQUEsRUFBQSxjQUVkRyxFQUFBQSxRQUFjRSxPQUNkQyxFQUFBQSxFQUFBQSxTQUFjRCxNQUNkRSxFQUFBQSxFQUFBQSxRQUFlRixNQUtqQkcsRUFBUVIsRUFBRSxTQUFTSyxNQUhuQkksRUFBT1QsRUFBRSxRQUFRSyxNQUVqQkssRUFBT1YsRUFBRSxTQUFRSyxNQUNqQkcsRUFBVVIsRUFBQSxXQUFGSyxNQUNSTSxFQUFPWCxFQUFFLFNBQVFLLE1BS2pCTyxFQUFVWixFQUFFLFdBQVdLLEtBRjNCSSxJQUFJSSxVQUFZLFVBQVdSLFFBQTNCLG1CQUFBLFNBQUEsV0FBQSxRQUFBLGNBQUEsYUFBQSxVQUFBLFVBQUEsWUFBQSxZQUFBLFVBQUEsT0FBQSxlQUFBLGFBQUEsV0FBQSxhQUVBUyxHQUFJRixVQUFZLFFBT2hCLElBQUFHLEdBQUEsS0FLSUMsRUFBa0IsSUFGdEJoQixHQUFBLG9CQUFBaUIsR0FBQSxTQUFBLFdBRUEsT0FEQUQsRUFBSUQsRUFBQUEsbUNBQUpWLE9BTUksSUFBSyxPQUhQVyxFQUFvQkMsQ0FDcEJELE1BQ0EsS0FBQSxRQUNFQSxFQUFBRixDQUNBRSxNQUNBLEtBQUEsT0FDQUEsRUFBQU4sQ0FDQU0sTUFDQSxLQUFBLE9BQ0FBLEVBQUFMLENBQ0FLLE1BQ0EsS0FBQSxRQUNBQSxFQUFBUixDQUNBUSxNQUNBLFNBQ0FFLE1BQUssNkJBU1RsQixFQUFFLHVCQUF1QmlCLEdBQUcsU0FBVSxXQXhCdEMsT0FFRUYsRUFBQWYsRUFBQSxzQ0FBQUssT0F5QkUsSUFBSyxPQUhQVSxFQUF1QkUsQ0FDdkJGLE1BQ0EsS0FBQSxTQUNFQSxFQUFBRixDQUNBRSxNQUNBLEtBQUEsT0FDQUEsRUFBQUksQ0FDQUosTUFDQSxLQUFBLFNBQ0FBLEVBQUFILENBQ0FHLE1BQ0EsU0FDQUcsTUFBSyx5QkFWUGpCLEVBQUFnQixHQUFBLFFBQUEsV0FGRm5CLFFBQUFDLElBQUEsU0F1QkVpQixFQUFBQSxFQUFBSSxLQUFBQyxNQUFBRCxLQUFBRSxTQUFBTixFQUFBTyxRQUlBUCxJQUFBQSxHQUFrQkEsQ0FHbEJoQixHQUFBLFdBQUFpQixHQUFBLFFBQUEsV0FDSU8sRUFBQUEsV0FBQUEsUUFBSlIsR0FDQWQsRUFBQXVCLEtBQUFULEdBQUFVLElBQUEsVUFBQSxVQUNFRixHQUFjUixFQUFTTyxPQUN2QnJCLEVBQUt5QixTQUFGLHdCQUF1Q0QsSUFBQSxRQUFBLFNBQ3hDeEIsUUFBQUEsSUFBVXVCLEdBQ1ZELFFBQUFBLElBQUFBLFlBR0ExQixFQUFRQyxTQUFJLG1CQUFaMkIsSUFBQSxRQUFBLFFBVU4sSUFBQUUsR0FBSUEsSUFDSkEsR0FBQUEsRUFBaUJaLE1BQUEsSUFBQWEsS0FBQSxXQUNmLE1BQUEsR0FBT1QsS0FBTUEsV0FERVUsS0FBQSxJQU9iLFdBQ0U1QixHQUFBQSxHQUFlMEIsWUFBQUEsV0FDZjlCLEVBQVFDLEtBQUk2QixHQUFaRixJQUFBLE1BQUEsVUFDQTVCLFFBQUtDLElBQUEsV0FDSGdDLEVBQUFBLFdBQWNDLFFBQWRoQixJQUNBbEIsY0FBWWtDLEdBQ2JsQyxRQUFBQyxJQUFBLGlCQUVKLGVBd0hDa0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0pTIExvYWRlZCcpO1xuJCgoKSA9PiB7XG4gIGNvbnN0ICRwbGF5R2FtZSA9ICQoJyNwbGF5Jyk7XG4gIGNvbnN0ICRpbnB1dEJ5VXNlciA9ICQoJyNhbnN3ZXInKTtcblxuICBjb25zdCAkYW5hZ3JhbTEgPSAkKCcjYW5hZ3JhbTEnKTtcbiAgY29uc3QgJGFuYWdyYW0yID0gJCgnI2FuYWdyYW0yJyk7XG4gIGNvbnN0ICRhbmFncmFtMyA9ICQoJyNhbmFncmFtMycpO1xuICBjb25zdCAkYW5hZ3JhbTQgPSAkKCcjYW5hZ3JhbTQnKTtcbiAgY29uc3QgJGFuYWdyYW01ID0gJCgnI2FuYWdyYW01Jyk7XG4gIGNvbnN0ICRhbmFncmFtNiA9ICQoJyNhbmFncmFtNicpO1xuICBjb25zdCAkYW5hZ3JhbTcgPSAkKCcjYW5hZ3JhbTcnKTtcbiAgY29uc3QgJGFuYWdyYW04ID0gJCgnI2FuYWdyYW04Jyk7XG4gIGNvbnN0ICRhbmFncmFtOSA9ICQoJyNhbmFncmFtOScpO1xuICBjb25zdCAkYW5hZ3JhbTEwID0gJCgnI2FuYWdyYW0xMCcpO1xuXG4gIGxldCAkQkJUID0gJCgnI0JCVCcpLnZhbCgpO1xuICBsZXQgJExPVFIgPSAkKCcjTE9UUicpLnZhbCgpO1xuICBsZXQgJEVQTCA9ICQoJyNFUEwnKS52YWwoKTtcbiAgbGV0ICRBU0lBID0gJCgnI0FTSUEnKS52YWwoKTtcbiAgbGV0ICRXREkgPSAkKCcjV0RJJykudmFsKCk7XG5cbiAgbGV0ICRFQVNZID0gJCgnI2Vhc3knKS52YWwoKTtcbiAgbGV0ICRNRURJVU0gPSAkKCcjbWVkaXVtJykudmFsKCk7XG4gIGxldCAkSEFSRCA9ICQoJyNoYXJkJykudmFsKCk7XG4gIGxldCAkSU5TQU5FID0gJCgnI2luc2FuZScpLnZhbCgpO1xuXG4gICRCQlQgPSBbJ3NoZWxkb24nLCdsZWFub3JkJywnc3BvY2snLCdjaGVlc2Nha2VmYWN0b3J5JywnaG93YXJkJywnc3RhcnRyZWsnLCdwZW5ueScsJ2tvb3RocmFwb2xpJywnYmVybmFkZXR0ZScsJ3BoeXNpY3MnLCdsYXVuZHJ5JywnaGFsb25pZ2h0JywnZHVtcGxpbmdzJywgJ2JyaXNrZXQnLCduYXNhJywnc3RyaW5ndGhlb3J5JywnZGFya21hdHRlcicsICdjb21pY2NvbicsJ2NvbWljYm9vayddO1xuXG4gICRMT1RSID0gWydhcnJhZ29uJywgJ2dpbWxpJ107XG5cbiAgLy8gbGV0IGN1cnJlbnRTY29yZSA9IDA7XG4gIC8vIGxldCBoaWdoU2NvcmUgPSAwO1xuXG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9TZWxlY3RvcnMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgbGV0IHNlbGVjdGVkRGlmZmljdWx0eSA9IG51bGw7XG4gIGxldCBzZWxlY3RlZFN1YmplY3QgPSBudWxsO1xuXG4gICQoJyNzdWJqZWN0LW9wdGlvbnMnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgc2VsZWN0ZWRTdWJqZWN0ID0gJCgnI3N1YmplY3Qtb3B0aW9ucyBvcHRpb246Y2hlY2tlZCcpLnZhbCgpO1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRTdWJqZWN0KXtcbiAgICAgIGNhc2UgJyRCQlQnOlxuICAgICAgc2VsZWN0ZWRTdWJqZWN0ID0gJEJCVDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJExPVFInOlxuICAgICAgc2VsZWN0ZWRTdWJqZWN0ID0gJExPVFI7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJyRFUEwnOlxuICAgICAgc2VsZWN0ZWRTdWJqZWN0ID0gJEVQTDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJFdESSc6XG4gICAgICBzZWxlY3RlZFN1YmplY3QgPSAkV0RJO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICckQVNJQSc6XG4gICAgICBzZWxlY3RlZFN1YmplY3QgPSAkQVNJQTtcbiAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGFsZXJ0KCdBQUFBQUFBQUFISEhISEhIISEhISEhJyk7XG5cbiAgICB9XG4gIH0pO1xuXG4gICQoJyNkaWZmaWN1bHR5LW9wdGlvbnMnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgc2VsZWN0ZWREaWZmaWN1bHR5ID0gJCgnI2RpZmZpY3VsdHktb3B0aW9ucyBvcHRpb246Y2hlY2tlZCcpLnZhbCgpO1xuICAgIHN3aXRjaCAoc2VsZWN0ZWREaWZmaWN1bHR5KXtcbiAgICAgIGNhc2UgJ2Vhc3knOlxuICAgICAgc2VsZWN0ZWREaWZmaWN1bHR5ID0gJEVBU1k7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICBzZWxlY3RlZERpZmZpY3VsdHkgPSAkTUVESVVNO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoYXJkJzpcbiAgICAgIHNlbGVjdGVkRGlmZmljdWx0eSA9ICRIQVJEO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbnNhbmUnOlxuICAgICAgc2VsZWN0ZWREaWZmaWN1bHR5ID0gJElOU0FORTtcbiAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGFsZXJ0KCdBQUFBQUFBQUhISEhIISEhISEnKTtcbiAgICB9XG4gIH0pO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vL1NlbGVjdG9ycy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICRwbGF5R2FtZS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKCdoZXlvIScpO1xuICAgIC8vLy8gVGhpcyBzdG9yZXMgdGhlIHNlbGVjdGVkIHN1YmplY3QgYW5kIHJhbmRvbWlzZXMgdGhlIGNob2ljZSBvZiB3b3JkcyBpbiB0aGUgYXJyYXkgdGhlIHN1YmplY3QgY2hvc2VuIHJlZmVycyB0by5cblxuXG4gICAgLy8vVGhpcyBjaG9vc2VzIGEgcmFuZG9tIHdvcmQgZnJvbSB0aGUgYXJyYXkgdGhhdCBzZWxlY3RlZFN1YmplY3QgaXMuXG4gICAgc2VsZWN0ZWRTdWJqZWN0ID0gc2VsZWN0ZWRTdWJqZWN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNlbGVjdGVkU3ViamVjdC5sZW5ndGgpXTtcblxuXG4gICAgLy9jdXJyZW50IHNjb3JlIG9mIHRoZSBwbGF5ZXJcbiAgICBsZXQgY3VycmVudFNjb3JlID0gMDtcbiAgICAvL2NvZGUgdmFsaWRhdGlvbiBvZiBhbmFncmFtXG4gICAgJCgnI3N1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCQoJyNhbnN3ZXInKS52YWwoKSA9PT0gc2VsZWN0ZWRTdWJqZWN0KXtcbiAgICAgICAgJGFuYWdyYW0xLnRleHQoc2VsZWN0ZWRTdWJqZWN0KS5jc3MoJ2Rpc3BsYXknLCdoaWRkZW4nKTtcbiAgICAgICAgY3VycmVudFNjb3JlID0gK3NlbGVjdGVkU3ViamVjdC5sZW5ndGg7XG4gICAgICAgICRhbmFncmFtMS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dExlZnQnKS5jc3MoJ2NvbG9yJywnZ3JlZW4nKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNjb3JlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3dvcmtpbmcnKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGFuYWdyYW0xLmFkZENsYXNzKCdhbmltYXRlZCB3b2JibGUnKS5jc3MoJ2NvbG9yJywncmVkJyk7XG4gICAgICB9XG4gICAgfVxuICApO1xuXG5cbiAgLy8vIHRoaXMgc2NyYW1ibGVzIHRoZSB3b3JkIGludG8gYW4gYW5hZ3JhbVxuICBsZXQgc2NyYW1ibGVkV29yZCA9IG51bGw7XG4gIHNjcmFtYmxlZFdvcmQgPSAgc2VsZWN0ZWRTdWJqZWN0LnNwbGl0KCcnKS5zb3J0KGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gIH0gKS5qb2luKCcnKTtcblxuXG4gIC8vLyBUaGVzZSBhcmUgdGhlIGRpZmZpY3VsdHkgc2V0dGluZ3MgY2hvc2VuIGJ5IHRoZSB1c2VyIHNwbGl0IGludG8gZGlmZmVyZW50IGZ1bmN0aW9ucyAuLi5cbiAgICBmdW5jdGlvbiBkaWZmaWN1bHR5RWFzeSAoKXtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICRhbmFncmFtMS50ZXh0KHNjcmFtYmxlZFdvcmQpLmNzcygndG9wJywgJys9MTBweCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnaGV5eW9vIScpO1xuICAgICAgICBpZigkKCcjYW5zd2VyJykudmFsKCkgPT09IHNlbGVjdGVkU3ViamVjdCl7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3llYXMgSmFtZXMhJyk7XG4gICAgICAgIH1cbiAgICAgIH0sMjAwMCk7XG4gICAgfVxuXG4gIGRpZmZpY3VsdHlFYXN5KHNlbGVjdGVkU3ViamVjdCk7XG4gIC8vIGRpZmZpY3VsdHlFYXN5KHNlbGVjdGVkU3ViamVjdCk7XG5cbiAgLy8gICBmdW5jdGlvbiBtZWRpdW0gKCl7XG4gIC8vICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgJGFuYWdyYW0xLnRleHQoc2VsZWN0ZWRTdWJqZWN0KS5jc3MoJ3RvcCcsICcrPTI1cHgnKTtcbiAgLy8gICAgIH0sMjAwMCk7XG4gIC8vICAgfVxuICAvLyAgIC8vIE1lZGl1bSgpO1xuICAvL1xuICAvLyAgIGZ1bmN0aW9uIGhhcmQgKCl7XG4gIC8vICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgJGFuYWdyYW0xLnRleHQoc2VsZWN0ZWRTdWJqZWN0KS5jc3MoJ3RvcCcsICcrPTM1cHgnKTtcbiAgLy8gICAgIH0sMTUwMCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIC8vIEhhcmQoKTtcbiAgLy8gICBmdW5jdGlvbiBpbnNhbmUgKCl7XG4gIC8vICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgJGFuYWdyYW0xLnRleHQoc2VsZWN0ZWRTdWJqZWN0KS5jc3MoJ3RvcCcsICcrPTUwcHgnKTtcbiAgLy8gICAgIH0sMTAwMCk7XG4gIC8vICAgfVxuXG59KTtcbi8vLyBEaWZmaWN1bHR5IHNlbGVjdGlvbnMgZW5kcyBoZXJlLlxuXG5cblxuXG4vLyBKYXZhU2NyaXB0XG5cbi8vICBjcmVhdGUgYW4gb2JqZWN0IHdoaWNoIHN0b3JlcyBhcnJheXMgb2YgdGhlIHN1YmplY3RzIHRoYXQgY2FuIGJlIGNob3NlbiBmb3IgdGhlIGdhbWUgY3JlYXRpbmcgYXJyYXlzIG9mIHN0cmluZ3MgYXNzaWduaW5nIG5hbWVzIG9mIHRoZSBhcnJheXMgdG8gc3ViamVjdHMgd2hpY2ggY2FuIGJlIGNob3NlblxuXG4vLyBsaW5rIHRoZSBzdWJqZWN0IGNob3NlbiBhbmQgIGNob3NlbiBvbiB0aGUgc2VsZWN0aW9uIGZpZWxkcyB0byBhcHBseSBpdCB0byB0aGVcblxuLy8gc2V0IGludGVydmFsIGZ1bmN0aW9ucyB0aGF0IG1lYW5zIHRoZSBhbmFncmFtcyBmYWxsIGZyb20gdGhlIHRvcCB0byBib3R0b20gb2YgdGhlIHNjcmVlbiBzZXQgZm9yIGVhY2ggZGlmZmljdXRseSBvZiB0aGUgZ2FtZVxuLy8gaGF2ZSB0aGUgYW5hZ3JhbXMgZmFsbCBmcm9tIGRpZmZmZXJlbnQgcGxhY2VzIC0gcG9zc2libHkgZnJvbSB0aGUgSFRNTFxuXG5cbi8vIG1ha2UgaXQgc28gd2hlbiB0aGUgYW5hZ3JhbXMgZ2V0IHRvIHRoZSBib3R0b20gb2YgdGhlIGJveCB0aGV5IGRpc3NhcGVhciBvciBhbmltYXRlIG91dFxuLy90YWtlIDEgYXdheSBmcm9tIGxpdmVzIGZvciBlYWNoIGFuYWdyYW0gdGhhdCByZWFjaGVzIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblxuLy8gbGlmZVxuXG4vLyBoaWdoIHNjb3JlIGNvdW50ZXIgZGVwZW5kZW50IG9uIHRoZSBsZW5ndGggb2YgdGhlIGFuYWdyYW0gdGhhdCBoYXMgYmVlbiBzb2x2ZWRcblxuLy8gYSBmdW5jdGlvbiBhbmQvb3IgYW4gaWYvZWxzZSBzdGF0ZW1lbnQgdGhhdCB3aWxsIGNoZWNrIHRoZSBpbnB1dCBmaWVsZCBhZ2Fpc250IHRoZSBhbmFncmFtc1xuLy91c2UsIHRvIGxvd2VyIGNhc2UsIGluY2FzZSB0aGV5IHR5cGUgaW4gd2l0aCBhbnkgY2FwaXRhbCBsZXR0ZXJzIHNvIHRoZSBzdHJpbmdzIHdpbGwgbWF0Y2hcblxuXG5cblxuXG4vLyBjb25zdCBTdWJqZWN0cyA9IHtcbi8vICAgQkJUOiBbJ3NoZWxkb24nLCdsZWFub3JkJywnc3BvY2snLCdjaGVlc2Nha2UgZmFjdG9yeScsJ2hvd2FyZCcsJ3JhaicsJ3N0YXIgdHJlaycsJ3Blbm55JywnYW15JywnYmVybmFkZXR0ZScsJ3BoeXNpY3MnLCdsYXVuZHJ5JywnaGFsbyBuaWdodCcsJ2R1bXBsaW5ncycsICdicmlza2V0JywnbmFzYScsJ3N0cmluZyB0aGVvcnknLCdkYXJrIG1hdHRlcicsICdjb21pY2NvbiddLFxuLy8gICBMT1RSOiBbJ2FycmFnb24nLCAnZ2ltbGknXSxcbi8vICAgRVBMOiBbJ2Fyc2VuYWwnLCAnZXZlcnRvbiddLFxuLy8gICBBU0lBOiBbJ3RoYWlsYW5kJywgJ3ZpZXRuYW0nLCAnaW5kaWEnXSxcbi8vICAgV0RJOiBbJ2Z1bmN0aW9uJywnb2JqZWN0JywnaG9tZWJyZXcnLCdqcXVlcnknLCdjb25zdCcsJ3RoaXMnXVxuLy8gfTtcblxuXG4vL3Jlc3RhcnQgYnV0dG9uXG4vLyBidXQgZG9lc24ndCByZXN0YXJ0IHRoZSBoaWdoc2NvcmVcblxuXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gUnVsZXNcbi8vdHlwZSBpbiB0aGUgYW5hZ3JhbSB0byB0aGUgaW5wdXQgZmllbGQgYW5kIHByZXNzIGVudGVyICAgb3IgY2xpY2sgYSBidXR0b24gd2hpY2ggc3VibWl0cyB5b3VyIGFuc3dlclxuXG4vL2lmIHRoZSBhbmFncmFtIGhpdHMgdGhlIGJvdHRvbSBvZiB0aGUgYm94IG9yIHRoZSByaWdodCBoYW5kIHNpZGUgZGVwZW5kZW50IG9uIGhvdyBJIGJ1aWxkIGl0XG5cbi8vIGRpZmZlcmVudCByb3VuZHMgd2hpY2ggbWVhbnMgbXVsdGlwbGUgYW5hZ3JhbXMgYXQgb25jZSBhbmQgeW91IGNhbiB0eXBlIHRvIHN1Ym1pdCBlaXRoZXIgYW5hZ3JhbXNcblxuXG4vL1dpbiBjb25kaXRpb25cblxuLy8geW91IGNhbiB3aW4gYnkgY29tcGxldGluZyBhbGwgdGhlIHJvdW5kcyBpbiB0aGUgZ2FtZVxuXG4vLyBzdGFydCBhZ2FpbiBpZiB5b3UgbG9zZSB5b3VyIGxpdmVzXG5cbi8vIEZlYXR1cmVzXG5cbi8vIEhpZ2ggc2NvcmUgdHJhY2tlciAtIHNjb3JlIHJlbGF0ZXMgdG8gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nXG5cbi8vIENob29zaW5nIGRpZmZlcmVudCBzdWJqZWN0cyBlLmcuIGZvb3RiYWxsIHRlYW1zLCBiaWcgYmFuZyB0aGVvcnkgZXRjXG5cbi8vIGFubm95aW5nIG11c2ljIHRvIHB1dCBwZW9wbGUgb2ZmIG9yIG11c2ljIHdoaWNoIHJlbGF0ZXMgdG8gdGhlbWUgdGhhdCBoYXMgYmVlbiBjaG9zZW5cblxuLy8gZGVwZW5kZW50IG9uIHRoZSBzdWJqZWN0IGNob3NlbiB0aGUgbG9vayBvZiB0aGUgZ2FtZSB3aWwgZGlmZmVyIHNvIGEgJ3RoZW1lJ1xuXG5cblxuXG5jbGFzcyBTdWJqZWN0IHtcblxuXG59XG4iXX0=
