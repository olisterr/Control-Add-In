var signature;

 

function init() {

    signature = new ns.SignatureControl();

    signature.init();

    RaiseAddInReady();

}

 

// Event will be fired when the control add-in is ready for communication through its API.

function RaiseAddInReady() {

    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('AddInReady');

}

 

// Event raised when the update signature has been called.

function RaiseUpdateSignature() {

    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('UpdateSignature');

}

 

// Event raised when the save signature has been called.

function RaiseSaveSignature(signatureData) {

    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('SaveSignature', [signatureData]);

}

 

 

function PutSignature(signatureData) {

    signature.updateSignature(signatureData);

}

 

function ClearSignature() {

    signature.clearSignature();

}

 

(function (ns) {

 

    ns.SignatureControl = function () {

        var canvas,

            ctx;

 

        function init() {

            createControlElements();

            wireButtonEvents();

            wireTouchEvents();

            ctx = canvas.getContext("2d");

        }

 

        function createControlElements() {

            var signatureArea = document.createElement("div"),

                canvasDiv = document.createElement("div"),

                buttonsContainer = document.createElement("div"),

                buttonClear = document.createElement("button"),

                buttonAccept = document.createElement("button"),

                buttonDraw = document.createElement("button");

 

            canvas = document.createElement("canvas"),

            canvas.id = "signatureCanvas";

            canvas.clientWidth = "100%";

            canvas.clientHeight = "100%";

            canvas.className = "signatureCanvas";

 

            buttonClear.id = "btnClear";

            buttonClear.textContent = "Clear";

            buttonClear.className = "signatureButton";

 

            buttonAccept.id = "btnAccept";

            buttonAccept.textContent = "Accept";

            buttonAccept.className = "signatureButton";

 

            buttonDraw.id = "btnDraw";

            buttonDraw.textContent = "Draw";

            buttonDraw.className = "signatureButton";

 

            canvasDiv.appendChild(canvas);

            buttonsContainer.appendChild(buttonDraw);

            buttonsContainer.appendChild(buttonAccept);

            buttonsContainer.appendChild(buttonClear);

 

            signatureArea.className = "signatureArea";

            signatureArea.appendChild(canvasDiv);

            signatureArea.appendChild(buttonsContainer);

 

            document.getElementById("controlAddIn").appendChild(signatureArea);

        }

 

        function wireTouchEvents() {

            canvas.addEventListener("mousedown", pointerDown, false);

            canvas.addEventListener("touchstart", pointerDown, false);

            canvas.addEventListener("mouseup", pointerUp, false);

            canvas.addEventListener("touchend", pointerUp, false);

        }

 

 

        function pointerDown(evt) {

            ctx.beginPath();

            ctx.moveTo(evt.offsetX, evt.offsetY);

            canvas.addEventListener("mousemove", paint, false);

            canvas.addEventListener("touchmove", paint, false);

        }

 

        function pointerUp(evt) {

            canvas.removeEventListener("mousemove", paint);

            canvas.removeEventListener("touchmove", paint);

            paint(evt);

        }

 

        function paint(evt) {

            ctx.lineTo(evt.offsetX, evt.offsetY);

            ctx.stroke();

        }

 

        function wireButtonEvents() {

            var btnClear = document.getElementById("btnClear"),

                btnAccept = document.getElementById("btnAccept"),

                btnDraw = document.getElementById("btnDraw");

 

            btnClear.addEventListener("click", function () {

                ctx.clearRect(0, 0, canvas.width, canvas.height);

            }, false);

 

            btnAccept.addEventListener("click", function () {

                var signatureImage = getSignatureImage();

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                RaiseSaveSignature(signatureImage);

            }, false);

 

            btnDraw.addEventListener("click", function () {

                RaiseUpdateSignature();

            }, false);

        }

 

        function updateSignature(signatureData) {

            var img = new Image();

            img.src = signatureData;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, 0, 0);

        }

 

        function getSignatureImage() {

            return canvas.toDataURL();

        }

 

        function clearSignature() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

        }

 

        return {

            init: init,

            updateSignature : updateSignature,

            getSignatureImage: getSignatureImage,

            clearSignature: clearSignature

        };

    };

})(this.ns = this.ns || {});