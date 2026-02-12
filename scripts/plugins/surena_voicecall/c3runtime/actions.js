"use strict";
{
    globalThis.C3.Plugins.surena_voicecall.Acts = {
        create(id){
            this._postToDOM("create",id);
        },
        Connect(userId)
        {
            this._postToDOM("connect",userId);
            this.userid=userId;
        },

        Call()
        {
            this._postToDOM("call");
        },

        Disconnect()
        {
            this._postToDOM("disconnect");
        },

        Reconnect()
        {
            this._postToDOM("reconnect");
        },

        Destroy()
        {
            this._postToDOM("destroy");
        },

        Send(data)
        {
            this._postToDOM("send",data);
        },

        Close()
        {
            this._postToDOM("close");
        },

        Answer()
        {
            this._postToDOM("answer");
        },

        Close2()
        {
            this._postToDOM("close2");
        }
    };
}