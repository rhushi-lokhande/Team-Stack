/// <reference path="../server.d.ts" />
'use strict';
module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.connectDate = new Date();
        socket.ip = (socket.handshake.address) ? socket.handshake.address : null;
        // Sockets inserts
        socket.on('disconnect', function () {
            console.log('[%s] %s disconnected.', new Date().toUTCString(), socket.ip);
        });
        console.log('[%s] %s logged.', socket.connectDate.toUTCString(), socket.ip);
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9zb2NrZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUN2QyxZQUFZLENBQUM7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVMsRUFBRTtJQUV4QixFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFTLE1BQU07UUFFL0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUV6RSxrQkFBa0I7UUFFbEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFaEYsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMiLCJmaWxlIjoiY29uZmlnL3NvY2tldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vc2VydmVyLmQudHNcIiAvPlxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlvKSB7XG5cbiAgICBpby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHNvY2tldCkge1xuXG4gICAgICAgIHNvY2tldC5jb25uZWN0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHNvY2tldC5pcCA9IChzb2NrZXQuaGFuZHNoYWtlLmFkZHJlc3MpID8gc29ja2V0LmhhbmRzaGFrZS5hZGRyZXNzIDogbnVsbDtcblxuICAgICAgICAvLyBTb2NrZXRzIGluc2VydHNcblxuICAgICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJXNdICVzIGRpc2Nvbm5lY3RlZC4nLCBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCksIHNvY2tldC5pcCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdbJXNdICVzIGxvZ2dlZC4nLCBzb2NrZXQuY29ubmVjdERhdGUudG9VVENTdHJpbmcoKSwgc29ja2V0LmlwKTtcblxuICAgIH0pO1xuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9