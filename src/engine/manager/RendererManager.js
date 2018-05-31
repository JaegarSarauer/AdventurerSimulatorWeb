"use strict";

import Engine from '../Engine';
import Subscriber from './internal/Subscriber';
import Updateable from '../update/Updateable';
import CanvasManager from '../manager/CanvasManager';
import * as Shader from '../const/shader';

const RendererManager = new (
    
class RendererManager {
    constructor() {

        //shader program.
        this.program = null;

        //GL Reference.
        this.GL = CanvasManager.GL;
    }

    createProgram(vertexShader, fragmentShader) {
        let program = this.GL.createProgram();
        this.GL.attachShader(program, vertexShader);
        this.GL.attachShader(program, fragmentShader);
        this.GL.linkProgram(program);
        let success = this.GL.getProgramParameter(program, this.GL.LINK_STATUS);
        if (success) {
            return program;
        }

        console.error(this.GL.getProgramInfoLog(program));
        this.GL.deleteProgram(program);
        return null;
    }

    createShader(type, source) {
        let shader = this.GL.createShader(type);
        this.GL.shaderSource(shader, source);
        this.GL.compileShader(shader);
        let success = this.GL.getShaderParameter(shader, this.GL.COMPILE_STATUS);
        if (success) {
            return shader;
        }

        console.error(this.GL.getShaderInfoLog(shader));
        this.GL.deleteShader(shader);
        return null;
    }

    setup() {

        // create GLSL shaders, upload the GLSL source, compile the shaders
        let vertexShader = this.createShader(this.GL.VERTEX_SHADER, Shader.VertexShader);
        let fragmentShader = this.createShader(this.GL.FRAGMENT_SHADER, Shader.FragmentShader);

        // Link the two shaders into a program
        let program = this.createProgram(vertexShader, fragmentShader);

        // look up where the vertex data needs to go.
        let positionAttributeLocation = this.GL.getAttribLocation(program, "a_position");

        // Create a buffer and put three 2d clip space points in it
        let positionBuffer = this.GL.createBuffer();

        // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
        this.GL.bindBuffer(this.GL.ARRAY_BUFFER, positionBuffer);

        let positions = [
            0, 0,
            0, 0.5,
            0.7, 0,
        ];
        this.GL.bufferData(this.GL.ARRAY_BUFFER, new Float32Array(positions), this.GL.STATIC_DRAW);

        // Create a vertex array object (attribute state)
        let vao = this.GL.createVertexArray();

        // and make it the one we're currently working with
        this.GL.bindVertexArray(vao);

        // Turn on the attribute
        this.GL.enableVertexAttribArray(positionAttributeLocation);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        let size = 2;          // 2 components per iteration
        let type = this.GL.FLOAT;   // the data is 32bit floats
        let normalize = false; // don't normalize the data
        let stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        let vertexOffset = 0;        // start at the beginning of the buffer
        this.GL.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, vertexOffset);

        // Tell WebGL how to convert from clip space to pixels
        this.GL.viewport(0, 0, this.GL.canvas.width, this.GL.canvas.height);

        // Clear the canvas
        this.GL.clearColor(.9, .9, .9, 1);
        this.GL.clear(this.GL.COLOR_BUFFER_BIT);

        // Tell it to use our program (pair of shaders)
        this.GL.useProgram(program);

        // Bind the attribute/buffer set we want.
        this.GL.bindVertexArray(vao);

        // draw
        let primitiveType = this.GL.TRIANGLES;
        let offset = 0;
        let count = 3;
        this.GL.drawArrays(primitiveType, offset, count);
    }
}

)();

export default RendererManager;