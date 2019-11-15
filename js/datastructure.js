   var stack = new buckets.Stack();
   var popcount = 1
   var queuecount = 1
   var pushMe = function() {
       if (document.getElementById("chkbox").checked) {
           document.getElementById("names").value = getRandomString(popcount);
           popcount++;
       }
       //    else if (document.getElementById("names").value == null) {
       //        $('.alert').alert()
       //    }
       pushItem = document.createElement("li");
       pushItem.innerText = document.getElementById("names").value;
       stack.add(pushItem);
       pushItem.className = "list-group-item";
       document.getElementById("listitems-stack").appendChild(pushItem);
   }
   var popMe = function() {
       if (stack.size() != 0) {
           var popItem = stack.pop();
           document.getElementById("listitems-stack").removeChild(popItem);
           popcount--;
       }
   }
   var queue = new buckets.Queue();
   var queueMe = function() {
       queueItem = document.createElement("li");

       if (document.getElementById("chkbox").checked) {
           document.getElementById("names").value = getRandomString(queuecount);
           queuecount++;
       }
       queueItem.innerText = document.getElementById("names").value;
       queueItem.className = "list-group-item";
       //Add to queue and to the UI
       queue.enqueue(queueItem);
       document.getElementById("listitems-queue").appendChild(queueItem);

   }
   var dequeueMe = function() {
       if (queue.size() != 0) {
           //Remove from the queue and the UI
           var dequeueItem = queue.dequeue();
           document.getElementById("listitems-queue").removeChild(dequeueItem);
           if (queue.size() == 0) {
               queuecount = 1;
           }
       }
   }

   var showhide = function() {
       if (document.getElementById("ds").value == "Stack") {
           document.getElementById("queue").style = "display:none;"
           document.getElementById("dequeue").style = "display:none;"
           document.getElementById("pop").style = ""
           document.getElementById("push").style = ""
           document.getElementById("listitems-queue").style = "display:none"
           document.getElementById("listitems-stack").style = ""
               //    document.getElementById("chkbox").style = "margin-left:15px;"


       }
       if (document.getElementById("ds").value == "Queue") {
           document.getElementById("pop").style = "display:none;"
           document.getElementById("push").style = "display:none"
           document.getElementById("queue").style = ""
           document.getElementById("dequeue").style = ""
           document.getElementById("listitems-stack").style = "display:none"
           document.getElementById("listitems-queue").style = ""
               //    document.getElementById("chkbox").style = "margin-left:15px;"


       }
       if (document.getElementById("ds").value == "All") {
           document.getElementById("pop").style = ""
           document.getElementById("push").style = ""
           document.getElementById("queue").style = ""
           document.getElementById("dequeue").style = ""
           document.getElementById("listitems-stack").style = ""
           document.getElementById("listitems-queue").style = ""
               //    document.getElementById("chkbox").style = "margin-left:15px;"


       }
   }

   var getRandomString = function(input) {
       return input + ":" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   }