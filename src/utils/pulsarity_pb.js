/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const pulsarity = $root.pulsarity = (() => {

    /**
     * Namespace pulsarity.
     * @exports pulsarity
     * @namespace
     */
    const pulsarity = {};

    pulsarity.db = (function() {

        /**
         * Namespace db.
         * @memberof pulsarity
         * @namespace
         */
        const db = {};

        db.Attribute = (function() {

            /**
             * Properties of an Attribute.
             * @typedef {Object} pulsarity.db.Attribute.$Properties
             * @property {string|null} [name] Attribute name
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of an Attribute.
             * @memberof pulsarity.db
             * @interface IAttribute
             * @augments pulsarity.db.Attribute.$Properties
             * @deprecated Use pulsarity.db.Attribute.$Properties instead.
             */

            /**
             * Shape of an Attribute.
             * @typedef {pulsarity.db.Attribute.$Properties} pulsarity.db.Attribute.$Shape
             */

            /**
             * Constructs a new Attribute.
             * @memberof pulsarity.db
             * @classdesc Represents an Attribute.
             * @constructor
             * @param {pulsarity.db.Attribute.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Attribute(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Attribute name.
             * @member {string} name
             * @memberof pulsarity.db.Attribute
             * @instance
             */
            Attribute.prototype.name = "";

            /**
             * Creates a new Attribute instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {pulsarity.db.Attribute.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.Attribute} Attribute instance
             * @type {{
             *   (properties: pulsarity.db.Attribute.$Shape): pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape;
             *   (properties?: pulsarity.db.Attribute.$Properties): pulsarity.db.Attribute;
             * }}
             */
            Attribute.create = function create(properties) {
                return new Attribute(properties);
            };

            /**
             * Encodes the specified Attribute message. Does not implicitly {@link pulsarity.db.Attribute.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {pulsarity.db.Attribute.$Properties} message Attribute message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Attribute.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Attribute message, length delimited. Does not implicitly {@link pulsarity.db.Attribute.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {pulsarity.db.Attribute.$Properties} message Attribute message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Attribute.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an Attribute message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape} Attribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Attribute.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Attribute(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes an Attribute message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape} Attribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Attribute.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Attribute message.
             * @function verify
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Attribute.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.Attribute} Attribute
             */
            Attribute.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.Attribute)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.Attribute();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from an Attribute message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {pulsarity.db.Attribute} message Attribute
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Attribute.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this Attribute to JSON.
             * @function toJSON
             * @memberof pulsarity.db.Attribute
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Attribute.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Attribute
             * @function getTypeUrl
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Attribute.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.Attribute";
            };

            return Attribute;
        })();

        db.Pilot = (function() {

            /**
             * Properties of a Pilot.
             * @typedef {Object} pulsarity.db.Pilot.$Properties
             * @property {number|null} [id] Pilot id
             * @property {string|null} [displayCallsign] Pilot displayCallsign
             * @property {string|null} [displayName] Pilot displayName
             * @property {Array.<pulsarity.db.Attribute.$Properties>|null} [attributes] Pilot attributes
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Pilot.
             * @memberof pulsarity.db
             * @interface IPilot
             * @augments pulsarity.db.Pilot.$Properties
             * @deprecated Use pulsarity.db.Pilot.$Properties instead.
             */

            /**
             * Shape of a Pilot.
             * @typedef {pulsarity.db.Pilot.$Properties} pulsarity.db.Pilot.$Shape
             */

            /**
             * Constructs a new Pilot.
             * @memberof pulsarity.db
             * @classdesc Represents a Pilot.
             * @constructor
             * @param {pulsarity.db.Pilot.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Pilot(properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pilot id.
             * @member {number} id
             * @memberof pulsarity.db.Pilot
             * @instance
             */
            Pilot.prototype.id = 0;

            /**
             * Pilot displayCallsign.
             * @member {string} displayCallsign
             * @memberof pulsarity.db.Pilot
             * @instance
             */
            Pilot.prototype.displayCallsign = "";

            /**
             * Pilot displayName.
             * @member {string} displayName
             * @memberof pulsarity.db.Pilot
             * @instance
             */
            Pilot.prototype.displayName = "";

            /**
             * Pilot attributes.
             * @member {Array.<pulsarity.db.Attribute.$Properties>} attributes
             * @memberof pulsarity.db.Pilot
             * @instance
             */
            Pilot.prototype.attributes = $util.emptyArray;

            /**
             * Creates a new Pilot instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {pulsarity.db.Pilot.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.Pilot} Pilot instance
             * @type {{
             *   (properties: pulsarity.db.Pilot.$Shape): pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape;
             *   (properties?: pulsarity.db.Pilot.$Properties): pulsarity.db.Pilot;
             * }}
             */
            Pilot.create = function create(properties) {
                return new Pilot(properties);
            };

            /**
             * Encodes the specified Pilot message. Does not implicitly {@link pulsarity.db.Pilot.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {pulsarity.db.Pilot.$Properties} message Pilot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pilot.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.displayCallsign != null && Object.hasOwnProperty.call(message, "displayCallsign"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayCallsign);
                if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Pilot message, length delimited. Does not implicitly {@link pulsarity.db.Pilot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {pulsarity.db.Pilot.$Properties} message Pilot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pilot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Pilot message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape} Pilot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pilot.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Pilot(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.displayCallsign = value;
                            else
                                delete message.displayCallsign;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.displayName = value;
                            else
                                delete message.displayName;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.attributes && message.attributes.length))
                                message.attributes = [];
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Pilot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape} Pilot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pilot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pilot message.
             * @function verify
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pilot.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.displayCallsign != null && message.hasOwnProperty("displayCallsign"))
                    if (!$util.isString(message.displayCallsign))
                        return "displayCallsign: string expected";
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                        return "attributes: array expected";
                    for (let i = 0; i < message.attributes.length; ++i) {
                        let error = $root.pulsarity.db.Attribute.verify(message.attributes[i], _depth + 1);
                        if (error)
                            return "attributes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Pilot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.Pilot} Pilot
             */
            Pilot.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.Pilot)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.Pilot();
                if (object.id != null)
                    if (Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.displayCallsign != null)
                    if (typeof object.displayCallsign !== "string" || object.displayCallsign.length)
                        message.displayCallsign = String(object.displayCallsign);
                if (object.displayName != null)
                    if (typeof object.displayName !== "string" || object.displayName.length)
                        message.displayName = String(object.displayName);
                if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                        throw TypeError(".pulsarity.db.Pilot.attributes: array expected");
                    message.attributes = Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (typeof object.attributes[i] !== "object")
                            throw TypeError(".pulsarity.db.Pilot.attributes: object expected");
                        message.attributes[i] = $root.pulsarity.db.Attribute.fromObject(object.attributes[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Pilot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {pulsarity.db.Pilot} message Pilot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pilot.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.displayCallsign = "";
                    object.displayName = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.displayCallsign != null && message.hasOwnProperty("displayCallsign"))
                    object.displayCallsign = message.displayCallsign;
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.attributes && message.attributes.length) {
                    object.attributes = Array(message.attributes.length);
                    for (let j = 0; j < message.attributes.length; ++j)
                        object.attributes[j] = $root.pulsarity.db.Attribute.toObject(message.attributes[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Pilot to JSON.
             * @function toJSON
             * @memberof pulsarity.db.Pilot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pilot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Pilot
             * @function getTypeUrl
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Pilot.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.Pilot";
            };

            return Pilot;
        })();

        db.Pilots = (function() {

            /**
             * Properties of a Pilots.
             * @typedef {Object} pulsarity.db.Pilots.$Properties
             * @property {Array.<pulsarity.db.Pilot.$Properties>|null} [pilots] Pilots pilots
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Pilots.
             * @memberof pulsarity.db
             * @interface IPilots
             * @augments pulsarity.db.Pilots.$Properties
             * @deprecated Use pulsarity.db.Pilots.$Properties instead.
             */

            /**
             * Shape of a Pilots.
             * @typedef {pulsarity.db.Pilots.$Properties} pulsarity.db.Pilots.$Shape
             */

            /**
             * Constructs a new Pilots.
             * @memberof pulsarity.db
             * @classdesc Represents a Pilots.
             * @constructor
             * @param {pulsarity.db.Pilots.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Pilots(properties) {
                this.pilots = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pilots pilots.
             * @member {Array.<pulsarity.db.Pilot.$Properties>} pilots
             * @memberof pulsarity.db.Pilots
             * @instance
             */
            Pilots.prototype.pilots = $util.emptyArray;

            /**
             * Creates a new Pilots instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {pulsarity.db.Pilots.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.Pilots} Pilots instance
             * @type {{
             *   (properties: pulsarity.db.Pilots.$Shape): pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape;
             *   (properties?: pulsarity.db.Pilots.$Properties): pulsarity.db.Pilots;
             * }}
             */
            Pilots.create = function create(properties) {
                return new Pilots(properties);
            };

            /**
             * Encodes the specified Pilots message. Does not implicitly {@link pulsarity.db.Pilots.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {pulsarity.db.Pilots.$Properties} message Pilots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pilots.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.pilots != null && message.pilots.length)
                    for (let i = 0; i < message.pilots.length; ++i)
                        $root.pulsarity.db.Pilot.encode(message.pilots[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Pilots message, length delimited. Does not implicitly {@link pulsarity.db.Pilots.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {pulsarity.db.Pilots.$Properties} message Pilots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pilots.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Pilots message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape} Pilots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pilots.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Pilots();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.pilots && message.pilots.length))
                                message.pilots = [];
                            message.pilots.push($root.pulsarity.db.Pilot.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Pilots message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape} Pilots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pilots.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pilots message.
             * @function verify
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pilots.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilots != null && message.hasOwnProperty("pilots")) {
                    if (!Array.isArray(message.pilots))
                        return "pilots: array expected";
                    for (let i = 0; i < message.pilots.length; ++i) {
                        let error = $root.pulsarity.db.Pilot.verify(message.pilots[i], _depth + 1);
                        if (error)
                            return "pilots." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Pilots message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.Pilots} Pilots
             */
            Pilots.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.Pilots)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.Pilots();
                if (object.pilots) {
                    if (!Array.isArray(object.pilots))
                        throw TypeError(".pulsarity.db.Pilots.pilots: array expected");
                    message.pilots = Array(object.pilots.length);
                    for (let i = 0; i < object.pilots.length; ++i) {
                        if (typeof object.pilots[i] !== "object")
                            throw TypeError(".pulsarity.db.Pilots.pilots: object expected");
                        message.pilots[i] = $root.pulsarity.db.Pilot.fromObject(object.pilots[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Pilots message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {pulsarity.db.Pilots} message Pilots
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pilots.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.pilots = [];
                if (message.pilots && message.pilots.length) {
                    object.pilots = Array(message.pilots.length);
                    for (let j = 0; j < message.pilots.length; ++j)
                        object.pilots[j] = $root.pulsarity.db.Pilot.toObject(message.pilots[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Pilots to JSON.
             * @function toJSON
             * @memberof pulsarity.db.Pilots
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pilots.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Pilots
             * @function getTypeUrl
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Pilots.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.Pilots";
            };

            return Pilots;
        })();

        db.RaceEvent = (function() {

            /**
             * Properties of a RaceEvent.
             * @typedef {Object} pulsarity.db.RaceEvent.$Properties
             * @property {number|null} [id] RaceEvent id
             * @property {string|null} [name] RaceEvent name
             * @property {google.protobuf.Timestamp.$Properties|null} [date] RaceEvent date
             * @property {Array.<pulsarity.db.Attribute.$Properties>|null} [attributes] RaceEvent attributes
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RaceEvent.
             * @memberof pulsarity.db
             * @interface IRaceEvent
             * @augments pulsarity.db.RaceEvent.$Properties
             * @deprecated Use pulsarity.db.RaceEvent.$Properties instead.
             */

            /**
             * Shape of a RaceEvent.
             * @typedef {pulsarity.db.RaceEvent.$Properties} pulsarity.db.RaceEvent.$Shape
             */

            /**
             * Constructs a new RaceEvent.
             * @memberof pulsarity.db
             * @classdesc Represents a RaceEvent.
             * @constructor
             * @param {pulsarity.db.RaceEvent.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RaceEvent(properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RaceEvent id.
             * @member {number} id
             * @memberof pulsarity.db.RaceEvent
             * @instance
             */
            RaceEvent.prototype.id = 0;

            /**
             * RaceEvent name.
             * @member {string} name
             * @memberof pulsarity.db.RaceEvent
             * @instance
             */
            RaceEvent.prototype.name = "";

            /**
             * RaceEvent date.
             * @member {google.protobuf.Timestamp.$Properties|null|undefined} date
             * @memberof pulsarity.db.RaceEvent
             * @instance
             */
            RaceEvent.prototype.date = null;

            /**
             * RaceEvent attributes.
             * @member {Array.<pulsarity.db.Attribute.$Properties>} attributes
             * @memberof pulsarity.db.RaceEvent
             * @instance
             */
            RaceEvent.prototype.attributes = $util.emptyArray;

            /**
             * Creates a new RaceEvent instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {pulsarity.db.RaceEvent.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.RaceEvent} RaceEvent instance
             * @type {{
             *   (properties: pulsarity.db.RaceEvent.$Shape): pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape;
             *   (properties?: pulsarity.db.RaceEvent.$Properties): pulsarity.db.RaceEvent;
             * }}
             */
            RaceEvent.create = function create(properties) {
                return new RaceEvent(properties);
            };

            /**
             * Encodes the specified RaceEvent message. Does not implicitly {@link pulsarity.db.RaceEvent.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {pulsarity.db.RaceEvent.$Properties} message RaceEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceEvent.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    $root.google.protobuf.Timestamp.encode(message.date, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RaceEvent message, length delimited. Does not implicitly {@link pulsarity.db.RaceEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {pulsarity.db.RaceEvent.$Properties} message RaceEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RaceEvent message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape} RaceEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceEvent.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceEvent(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.date = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), undefined, _depth + 1, message.date);
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.attributes && message.attributes.length))
                                message.attributes = [];
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RaceEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape} RaceEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RaceEvent message.
             * @function verify
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RaceEvent.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.date != null && message.hasOwnProperty("date")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.date, _depth + 1);
                    if (error)
                        return "date." + error;
                }
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                        return "attributes: array expected";
                    for (let i = 0; i < message.attributes.length; ++i) {
                        let error = $root.pulsarity.db.Attribute.verify(message.attributes[i], _depth + 1);
                        if (error)
                            return "attributes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RaceEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.RaceEvent} RaceEvent
             */
            RaceEvent.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceEvent)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceEvent();
                if (object.id != null)
                    if (Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.date != null) {
                    if (typeof object.date !== "object")
                        throw TypeError(".pulsarity.db.RaceEvent.date: object expected");
                    message.date = $root.google.protobuf.Timestamp.fromObject(object.date, _depth + 1);
                }
                if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                        throw TypeError(".pulsarity.db.RaceEvent.attributes: array expected");
                    message.attributes = Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (typeof object.attributes[i] !== "object")
                            throw TypeError(".pulsarity.db.RaceEvent.attributes: object expected");
                        message.attributes[i] = $root.pulsarity.db.Attribute.fromObject(object.attributes[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RaceEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {pulsarity.db.RaceEvent} message RaceEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RaceEvent.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.date = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.date != null && message.hasOwnProperty("date"))
                    object.date = $root.google.protobuf.Timestamp.toObject(message.date, options, _depth + 1);
                if (message.attributes && message.attributes.length) {
                    object.attributes = Array(message.attributes.length);
                    for (let j = 0; j < message.attributes.length; ++j)
                        object.attributes[j] = $root.pulsarity.db.Attribute.toObject(message.attributes[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this RaceEvent to JSON.
             * @function toJSON
             * @memberof pulsarity.db.RaceEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RaceEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceEvent
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceEvent.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.RaceEvent";
            };

            return RaceEvent;
        })();

        db.RaceEvents = (function() {

            /**
             * Properties of a RaceEvents.
             * @typedef {Object} pulsarity.db.RaceEvents.$Properties
             * @property {Array.<pulsarity.db.RaceEvent.$Properties>|null} [events] RaceEvents events
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RaceEvents.
             * @memberof pulsarity.db
             * @interface IRaceEvents
             * @augments pulsarity.db.RaceEvents.$Properties
             * @deprecated Use pulsarity.db.RaceEvents.$Properties instead.
             */

            /**
             * Shape of a RaceEvents.
             * @typedef {pulsarity.db.RaceEvents.$Properties} pulsarity.db.RaceEvents.$Shape
             */

            /**
             * Constructs a new RaceEvents.
             * @memberof pulsarity.db
             * @classdesc Represents a RaceEvents.
             * @constructor
             * @param {pulsarity.db.RaceEvents.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RaceEvents(properties) {
                this.events = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RaceEvents events.
             * @member {Array.<pulsarity.db.RaceEvent.$Properties>} events
             * @memberof pulsarity.db.RaceEvents
             * @instance
             */
            RaceEvents.prototype.events = $util.emptyArray;

            /**
             * Creates a new RaceEvents instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {pulsarity.db.RaceEvents.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.RaceEvents} RaceEvents instance
             * @type {{
             *   (properties: pulsarity.db.RaceEvents.$Shape): pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape;
             *   (properties?: pulsarity.db.RaceEvents.$Properties): pulsarity.db.RaceEvents;
             * }}
             */
            RaceEvents.create = function create(properties) {
                return new RaceEvents(properties);
            };

            /**
             * Encodes the specified RaceEvents message. Does not implicitly {@link pulsarity.db.RaceEvents.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {pulsarity.db.RaceEvents.$Properties} message RaceEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceEvents.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.events != null && message.events.length)
                    for (let i = 0; i < message.events.length; ++i)
                        $root.pulsarity.db.RaceEvent.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RaceEvents message, length delimited. Does not implicitly {@link pulsarity.db.RaceEvents.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {pulsarity.db.RaceEvents.$Properties} message RaceEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceEvents.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RaceEvents message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape} RaceEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceEvents.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceEvents();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.pulsarity.db.RaceEvent.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RaceEvents message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape} RaceEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceEvents.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RaceEvents message.
             * @function verify
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RaceEvents.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (let i = 0; i < message.events.length; ++i) {
                        let error = $root.pulsarity.db.RaceEvent.verify(message.events[i], _depth + 1);
                        if (error)
                            return "events." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RaceEvents message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.RaceEvents} RaceEvents
             */
            RaceEvents.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceEvents)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceEvents();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".pulsarity.db.RaceEvents.events: array expected");
                    message.events = Array(object.events.length);
                    for (let i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".pulsarity.db.RaceEvents.events: object expected");
                        message.events[i] = $root.pulsarity.db.RaceEvent.fromObject(object.events[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RaceEvents message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {pulsarity.db.RaceEvents} message RaceEvents
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RaceEvents.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (message.events && message.events.length) {
                    object.events = Array(message.events.length);
                    for (let j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.pulsarity.db.RaceEvent.toObject(message.events[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this RaceEvents to JSON.
             * @function toJSON
             * @memberof pulsarity.db.RaceEvents
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RaceEvents.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceEvents
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceEvents.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.RaceEvents";
            };

            return RaceEvents;
        })();

        db.RaceClass = (function() {

            /**
             * Properties of a RaceClass.
             * @typedef {Object} pulsarity.db.RaceClass.$Properties
             * @property {number|null} [id] RaceClass id
             * @property {string|null} [name] RaceClass name
             * @property {Array.<pulsarity.db.Attribute.$Properties>|null} [attributes] RaceClass attributes
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RaceClass.
             * @memberof pulsarity.db
             * @interface IRaceClass
             * @augments pulsarity.db.RaceClass.$Properties
             * @deprecated Use pulsarity.db.RaceClass.$Properties instead.
             */

            /**
             * Shape of a RaceClass.
             * @typedef {pulsarity.db.RaceClass.$Properties} pulsarity.db.RaceClass.$Shape
             */

            /**
             * Constructs a new RaceClass.
             * @memberof pulsarity.db
             * @classdesc Represents a RaceClass.
             * @constructor
             * @param {pulsarity.db.RaceClass.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RaceClass(properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RaceClass id.
             * @member {number} id
             * @memberof pulsarity.db.RaceClass
             * @instance
             */
            RaceClass.prototype.id = 0;

            /**
             * RaceClass name.
             * @member {string} name
             * @memberof pulsarity.db.RaceClass
             * @instance
             */
            RaceClass.prototype.name = "";

            /**
             * RaceClass attributes.
             * @member {Array.<pulsarity.db.Attribute.$Properties>} attributes
             * @memberof pulsarity.db.RaceClass
             * @instance
             */
            RaceClass.prototype.attributes = $util.emptyArray;

            /**
             * Creates a new RaceClass instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {pulsarity.db.RaceClass.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.RaceClass} RaceClass instance
             * @type {{
             *   (properties: pulsarity.db.RaceClass.$Shape): pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape;
             *   (properties?: pulsarity.db.RaceClass.$Properties): pulsarity.db.RaceClass;
             * }}
             */
            RaceClass.create = function create(properties) {
                return new RaceClass(properties);
            };

            /**
             * Encodes the specified RaceClass message. Does not implicitly {@link pulsarity.db.RaceClass.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {pulsarity.db.RaceClass.$Properties} message RaceClass message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceClass.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RaceClass message, length delimited. Does not implicitly {@link pulsarity.db.RaceClass.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {pulsarity.db.RaceClass.$Properties} message RaceClass message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceClass.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RaceClass message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape} RaceClass
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceClass.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceClass(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.attributes && message.attributes.length))
                                message.attributes = [];
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RaceClass message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape} RaceClass
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceClass.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RaceClass message.
             * @function verify
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RaceClass.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                        return "attributes: array expected";
                    for (let i = 0; i < message.attributes.length; ++i) {
                        let error = $root.pulsarity.db.Attribute.verify(message.attributes[i], _depth + 1);
                        if (error)
                            return "attributes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RaceClass message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.RaceClass} RaceClass
             */
            RaceClass.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceClass)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceClass();
                if (object.id != null)
                    if (Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                        throw TypeError(".pulsarity.db.RaceClass.attributes: array expected");
                    message.attributes = Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (typeof object.attributes[i] !== "object")
                            throw TypeError(".pulsarity.db.RaceClass.attributes: object expected");
                        message.attributes[i] = $root.pulsarity.db.Attribute.fromObject(object.attributes[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RaceClass message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {pulsarity.db.RaceClass} message RaceClass
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RaceClass.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.attributes && message.attributes.length) {
                    object.attributes = Array(message.attributes.length);
                    for (let j = 0; j < message.attributes.length; ++j)
                        object.attributes[j] = $root.pulsarity.db.Attribute.toObject(message.attributes[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this RaceClass to JSON.
             * @function toJSON
             * @memberof pulsarity.db.RaceClass
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RaceClass.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceClass
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceClass.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.RaceClass";
            };

            return RaceClass;
        })();

        db.RaceClasses = (function() {

            /**
             * Properties of a RaceClasses.
             * @typedef {Object} pulsarity.db.RaceClasses.$Properties
             * @property {Array.<pulsarity.db.RaceClass.$Properties>|null} [raceclasses] RaceClasses raceclasses
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RaceClasses.
             * @memberof pulsarity.db
             * @interface IRaceClasses
             * @augments pulsarity.db.RaceClasses.$Properties
             * @deprecated Use pulsarity.db.RaceClasses.$Properties instead.
             */

            /**
             * Shape of a RaceClasses.
             * @typedef {pulsarity.db.RaceClasses.$Properties} pulsarity.db.RaceClasses.$Shape
             */

            /**
             * Constructs a new RaceClasses.
             * @memberof pulsarity.db
             * @classdesc Represents a RaceClasses.
             * @constructor
             * @param {pulsarity.db.RaceClasses.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RaceClasses(properties) {
                this.raceclasses = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RaceClasses raceclasses.
             * @member {Array.<pulsarity.db.RaceClass.$Properties>} raceclasses
             * @memberof pulsarity.db.RaceClasses
             * @instance
             */
            RaceClasses.prototype.raceclasses = $util.emptyArray;

            /**
             * Creates a new RaceClasses instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {pulsarity.db.RaceClasses.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.RaceClasses} RaceClasses instance
             * @type {{
             *   (properties: pulsarity.db.RaceClasses.$Shape): pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape;
             *   (properties?: pulsarity.db.RaceClasses.$Properties): pulsarity.db.RaceClasses;
             * }}
             */
            RaceClasses.create = function create(properties) {
                return new RaceClasses(properties);
            };

            /**
             * Encodes the specified RaceClasses message. Does not implicitly {@link pulsarity.db.RaceClasses.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {pulsarity.db.RaceClasses.$Properties} message RaceClasses message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceClasses.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.raceclasses != null && message.raceclasses.length)
                    for (let i = 0; i < message.raceclasses.length; ++i)
                        $root.pulsarity.db.RaceClass.encode(message.raceclasses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RaceClasses message, length delimited. Does not implicitly {@link pulsarity.db.RaceClasses.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {pulsarity.db.RaceClasses.$Properties} message RaceClasses message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RaceClasses.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RaceClasses message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape} RaceClasses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceClasses.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceClasses();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.raceclasses && message.raceclasses.length))
                                message.raceclasses = [];
                            message.raceclasses.push($root.pulsarity.db.RaceClass.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RaceClasses message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape} RaceClasses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RaceClasses.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RaceClasses message.
             * @function verify
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RaceClasses.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.raceclasses != null && message.hasOwnProperty("raceclasses")) {
                    if (!Array.isArray(message.raceclasses))
                        return "raceclasses: array expected";
                    for (let i = 0; i < message.raceclasses.length; ++i) {
                        let error = $root.pulsarity.db.RaceClass.verify(message.raceclasses[i], _depth + 1);
                        if (error)
                            return "raceclasses." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RaceClasses message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.RaceClasses} RaceClasses
             */
            RaceClasses.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceClasses)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceClasses();
                if (object.raceclasses) {
                    if (!Array.isArray(object.raceclasses))
                        throw TypeError(".pulsarity.db.RaceClasses.raceclasses: array expected");
                    message.raceclasses = Array(object.raceclasses.length);
                    for (let i = 0; i < object.raceclasses.length; ++i) {
                        if (typeof object.raceclasses[i] !== "object")
                            throw TypeError(".pulsarity.db.RaceClasses.raceclasses: object expected");
                        message.raceclasses[i] = $root.pulsarity.db.RaceClass.fromObject(object.raceclasses[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RaceClasses message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {pulsarity.db.RaceClasses} message RaceClasses
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RaceClasses.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.raceclasses = [];
                if (message.raceclasses && message.raceclasses.length) {
                    object.raceclasses = Array(message.raceclasses.length);
                    for (let j = 0; j < message.raceclasses.length; ++j)
                        object.raceclasses[j] = $root.pulsarity.db.RaceClass.toObject(message.raceclasses[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this RaceClasses to JSON.
             * @function toJSON
             * @memberof pulsarity.db.RaceClasses
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RaceClasses.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceClasses
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceClasses.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.RaceClasses";
            };

            return RaceClasses;
        })();

        db.Round = (function() {

            /**
             * Properties of a Round.
             * @typedef {Object} pulsarity.db.Round.$Properties
             * @property {number|null} [id] Round id
             * @property {number|null} [roundNum] Round roundNum
             * @property {Array.<pulsarity.db.Attribute.$Properties>|null} [attributes] Round attributes
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Round.
             * @memberof pulsarity.db
             * @interface IRound
             * @augments pulsarity.db.Round.$Properties
             * @deprecated Use pulsarity.db.Round.$Properties instead.
             */

            /**
             * Shape of a Round.
             * @typedef {pulsarity.db.Round.$Properties} pulsarity.db.Round.$Shape
             */

            /**
             * Constructs a new Round.
             * @memberof pulsarity.db
             * @classdesc Represents a Round.
             * @constructor
             * @param {pulsarity.db.Round.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Round(properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Round id.
             * @member {number} id
             * @memberof pulsarity.db.Round
             * @instance
             */
            Round.prototype.id = 0;

            /**
             * Round roundNum.
             * @member {number} roundNum
             * @memberof pulsarity.db.Round
             * @instance
             */
            Round.prototype.roundNum = 0;

            /**
             * Round attributes.
             * @member {Array.<pulsarity.db.Attribute.$Properties>} attributes
             * @memberof pulsarity.db.Round
             * @instance
             */
            Round.prototype.attributes = $util.emptyArray;

            /**
             * Creates a new Round instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.Round
             * @static
             * @param {pulsarity.db.Round.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.Round} Round instance
             * @type {{
             *   (properties: pulsarity.db.Round.$Shape): pulsarity.db.Round & pulsarity.db.Round.$Shape;
             *   (properties?: pulsarity.db.Round.$Properties): pulsarity.db.Round;
             * }}
             */
            Round.create = function create(properties) {
                return new Round(properties);
            };

            /**
             * Encodes the specified Round message. Does not implicitly {@link pulsarity.db.Round.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.Round
             * @static
             * @param {pulsarity.db.Round.$Properties} message Round message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Round.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.roundNum != null && Object.hasOwnProperty.call(message, "roundNum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roundNum);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Round message, length delimited. Does not implicitly {@link pulsarity.db.Round.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.Round
             * @static
             * @param {pulsarity.db.Round.$Properties} message Round message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Round.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Round message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.Round
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.Round & pulsarity.db.Round.$Shape} Round
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Round.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Round(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.roundNum = value;
                            else
                                delete message.roundNum;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.attributes && message.attributes.length))
                                message.attributes = [];
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Round message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.Round
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.Round & pulsarity.db.Round.$Shape} Round
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Round.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Round message.
             * @function verify
             * @memberof pulsarity.db.Round
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Round.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.roundNum != null && message.hasOwnProperty("roundNum"))
                    if (!$util.isInteger(message.roundNum))
                        return "roundNum: integer expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                        return "attributes: array expected";
                    for (let i = 0; i < message.attributes.length; ++i) {
                        let error = $root.pulsarity.db.Attribute.verify(message.attributes[i], _depth + 1);
                        if (error)
                            return "attributes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Round message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.Round
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.Round} Round
             */
            Round.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.Round)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.Round();
                if (object.id != null)
                    if (Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.roundNum != null)
                    if (Number(object.roundNum) !== 0)
                        message.roundNum = object.roundNum | 0;
                if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                        throw TypeError(".pulsarity.db.Round.attributes: array expected");
                    message.attributes = Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (typeof object.attributes[i] !== "object")
                            throw TypeError(".pulsarity.db.Round.attributes: object expected");
                        message.attributes[i] = $root.pulsarity.db.Attribute.fromObject(object.attributes[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Round message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.Round
             * @static
             * @param {pulsarity.db.Round} message Round
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Round.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.roundNum = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.roundNum != null && message.hasOwnProperty("roundNum"))
                    object.roundNum = message.roundNum;
                if (message.attributes && message.attributes.length) {
                    object.attributes = Array(message.attributes.length);
                    for (let j = 0; j < message.attributes.length; ++j)
                        object.attributes[j] = $root.pulsarity.db.Attribute.toObject(message.attributes[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Round to JSON.
             * @function toJSON
             * @memberof pulsarity.db.Round
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Round.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Round
             * @function getTypeUrl
             * @memberof pulsarity.db.Round
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Round.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.Round";
            };

            return Round;
        })();

        db.Rounds = (function() {

            /**
             * Properties of a Rounds.
             * @typedef {Object} pulsarity.db.Rounds.$Properties
             * @property {Array.<pulsarity.db.Round.$Properties>|null} [rounds] Rounds rounds
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Rounds.
             * @memberof pulsarity.db
             * @interface IRounds
             * @augments pulsarity.db.Rounds.$Properties
             * @deprecated Use pulsarity.db.Rounds.$Properties instead.
             */

            /**
             * Shape of a Rounds.
             * @typedef {pulsarity.db.Rounds.$Properties} pulsarity.db.Rounds.$Shape
             */

            /**
             * Constructs a new Rounds.
             * @memberof pulsarity.db
             * @classdesc Represents a Rounds.
             * @constructor
             * @param {pulsarity.db.Rounds.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Rounds(properties) {
                this.rounds = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Rounds rounds.
             * @member {Array.<pulsarity.db.Round.$Properties>} rounds
             * @memberof pulsarity.db.Rounds
             * @instance
             */
            Rounds.prototype.rounds = $util.emptyArray;

            /**
             * Creates a new Rounds instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {pulsarity.db.Rounds.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.Rounds} Rounds instance
             * @type {{
             *   (properties: pulsarity.db.Rounds.$Shape): pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape;
             *   (properties?: pulsarity.db.Rounds.$Properties): pulsarity.db.Rounds;
             * }}
             */
            Rounds.create = function create(properties) {
                return new Rounds(properties);
            };

            /**
             * Encodes the specified Rounds message. Does not implicitly {@link pulsarity.db.Rounds.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {pulsarity.db.Rounds.$Properties} message Rounds message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rounds.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.rounds != null && message.rounds.length)
                    for (let i = 0; i < message.rounds.length; ++i)
                        $root.pulsarity.db.Round.encode(message.rounds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Rounds message, length delimited. Does not implicitly {@link pulsarity.db.Rounds.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {pulsarity.db.Rounds.$Properties} message Rounds message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rounds.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Rounds message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape} Rounds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rounds.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Rounds();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.rounds && message.rounds.length))
                                message.rounds = [];
                            message.rounds.push($root.pulsarity.db.Round.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Rounds message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape} Rounds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rounds.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Rounds message.
             * @function verify
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Rounds.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.rounds != null && message.hasOwnProperty("rounds")) {
                    if (!Array.isArray(message.rounds))
                        return "rounds: array expected";
                    for (let i = 0; i < message.rounds.length; ++i) {
                        let error = $root.pulsarity.db.Round.verify(message.rounds[i], _depth + 1);
                        if (error)
                            return "rounds." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Rounds message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.Rounds} Rounds
             */
            Rounds.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.Rounds)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.Rounds();
                if (object.rounds) {
                    if (!Array.isArray(object.rounds))
                        throw TypeError(".pulsarity.db.Rounds.rounds: array expected");
                    message.rounds = Array(object.rounds.length);
                    for (let i = 0; i < object.rounds.length; ++i) {
                        if (typeof object.rounds[i] !== "object")
                            throw TypeError(".pulsarity.db.Rounds.rounds: object expected");
                        message.rounds[i] = $root.pulsarity.db.Round.fromObject(object.rounds[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Rounds message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {pulsarity.db.Rounds} message Rounds
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Rounds.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.rounds = [];
                if (message.rounds && message.rounds.length) {
                    object.rounds = Array(message.rounds.length);
                    for (let j = 0; j < message.rounds.length; ++j)
                        object.rounds[j] = $root.pulsarity.db.Round.toObject(message.rounds[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Rounds to JSON.
             * @function toJSON
             * @memberof pulsarity.db.Rounds
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Rounds.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Rounds
             * @function getTypeUrl
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Rounds.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.Rounds";
            };

            return Rounds;
        })();

        db.Heat = (function() {

            /**
             * Properties of a Heat.
             * @typedef {Object} pulsarity.db.Heat.$Properties
             * @property {number|null} [id] Heat id
             * @property {number|null} [heatNum] Heat heatNum
             * @property {Array.<pulsarity.db.Attribute.$Properties>|null} [attributes] Heat attributes
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Heat.
             * @memberof pulsarity.db
             * @interface IHeat
             * @augments pulsarity.db.Heat.$Properties
             * @deprecated Use pulsarity.db.Heat.$Properties instead.
             */

            /**
             * Shape of a Heat.
             * @typedef {pulsarity.db.Heat.$Properties} pulsarity.db.Heat.$Shape
             */

            /**
             * Constructs a new Heat.
             * @memberof pulsarity.db
             * @classdesc Represents a Heat.
             * @constructor
             * @param {pulsarity.db.Heat.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Heat(properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Heat id.
             * @member {number} id
             * @memberof pulsarity.db.Heat
             * @instance
             */
            Heat.prototype.id = 0;

            /**
             * Heat heatNum.
             * @member {number} heatNum
             * @memberof pulsarity.db.Heat
             * @instance
             */
            Heat.prototype.heatNum = 0;

            /**
             * Heat attributes.
             * @member {Array.<pulsarity.db.Attribute.$Properties>} attributes
             * @memberof pulsarity.db.Heat
             * @instance
             */
            Heat.prototype.attributes = $util.emptyArray;

            /**
             * Creates a new Heat instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.Heat
             * @static
             * @param {pulsarity.db.Heat.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.Heat} Heat instance
             * @type {{
             *   (properties: pulsarity.db.Heat.$Shape): pulsarity.db.Heat & pulsarity.db.Heat.$Shape;
             *   (properties?: pulsarity.db.Heat.$Properties): pulsarity.db.Heat;
             * }}
             */
            Heat.create = function create(properties) {
                return new Heat(properties);
            };

            /**
             * Encodes the specified Heat message. Does not implicitly {@link pulsarity.db.Heat.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.Heat
             * @static
             * @param {pulsarity.db.Heat.$Properties} message Heat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heat.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.heatNum != null && Object.hasOwnProperty.call(message, "heatNum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heatNum);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Heat message, length delimited. Does not implicitly {@link pulsarity.db.Heat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.Heat
             * @static
             * @param {pulsarity.db.Heat.$Properties} message Heat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Heat message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.Heat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.Heat & pulsarity.db.Heat.$Shape} Heat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heat.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Heat(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.heatNum = value;
                            else
                                delete message.heatNum;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.attributes && message.attributes.length))
                                message.attributes = [];
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Heat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.Heat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.Heat & pulsarity.db.Heat.$Shape} Heat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Heat message.
             * @function verify
             * @memberof pulsarity.db.Heat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Heat.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.heatNum != null && message.hasOwnProperty("heatNum"))
                    if (!$util.isInteger(message.heatNum))
                        return "heatNum: integer expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                        return "attributes: array expected";
                    for (let i = 0; i < message.attributes.length; ++i) {
                        let error = $root.pulsarity.db.Attribute.verify(message.attributes[i], _depth + 1);
                        if (error)
                            return "attributes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Heat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.Heat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.Heat} Heat
             */
            Heat.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.Heat)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.Heat();
                if (object.id != null)
                    if (Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.heatNum != null)
                    if (Number(object.heatNum) !== 0)
                        message.heatNum = object.heatNum | 0;
                if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                        throw TypeError(".pulsarity.db.Heat.attributes: array expected");
                    message.attributes = Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (typeof object.attributes[i] !== "object")
                            throw TypeError(".pulsarity.db.Heat.attributes: object expected");
                        message.attributes[i] = $root.pulsarity.db.Attribute.fromObject(object.attributes[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Heat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.Heat
             * @static
             * @param {pulsarity.db.Heat} message Heat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Heat.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.heatNum = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.heatNum != null && message.hasOwnProperty("heatNum"))
                    object.heatNum = message.heatNum;
                if (message.attributes && message.attributes.length) {
                    object.attributes = Array(message.attributes.length);
                    for (let j = 0; j < message.attributes.length; ++j)
                        object.attributes[j] = $root.pulsarity.db.Attribute.toObject(message.attributes[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Heat to JSON.
             * @function toJSON
             * @memberof pulsarity.db.Heat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Heat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Heat
             * @function getTypeUrl
             * @memberof pulsarity.db.Heat
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Heat.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.Heat";
            };

            return Heat;
        })();

        db.Heats = (function() {

            /**
             * Properties of a Heats.
             * @typedef {Object} pulsarity.db.Heats.$Properties
             * @property {Array.<pulsarity.db.Heat.$Properties>|null} [heats] Heats heats
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Heats.
             * @memberof pulsarity.db
             * @interface IHeats
             * @augments pulsarity.db.Heats.$Properties
             * @deprecated Use pulsarity.db.Heats.$Properties instead.
             */

            /**
             * Shape of a Heats.
             * @typedef {pulsarity.db.Heats.$Properties} pulsarity.db.Heats.$Shape
             */

            /**
             * Constructs a new Heats.
             * @memberof pulsarity.db
             * @classdesc Represents a Heats.
             * @constructor
             * @param {pulsarity.db.Heats.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Heats(properties) {
                this.heats = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Heats heats.
             * @member {Array.<pulsarity.db.Heat.$Properties>} heats
             * @memberof pulsarity.db.Heats
             * @instance
             */
            Heats.prototype.heats = $util.emptyArray;

            /**
             * Creates a new Heats instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.Heats
             * @static
             * @param {pulsarity.db.Heats.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.Heats} Heats instance
             * @type {{
             *   (properties: pulsarity.db.Heats.$Shape): pulsarity.db.Heats & pulsarity.db.Heats.$Shape;
             *   (properties?: pulsarity.db.Heats.$Properties): pulsarity.db.Heats;
             * }}
             */
            Heats.create = function create(properties) {
                return new Heats(properties);
            };

            /**
             * Encodes the specified Heats message. Does not implicitly {@link pulsarity.db.Heats.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.Heats
             * @static
             * @param {pulsarity.db.Heats.$Properties} message Heats message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heats.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.heats != null && message.heats.length)
                    for (let i = 0; i < message.heats.length; ++i)
                        $root.pulsarity.db.Heat.encode(message.heats[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Heats message, length delimited. Does not implicitly {@link pulsarity.db.Heats.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.Heats
             * @static
             * @param {pulsarity.db.Heats.$Properties} message Heats message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heats.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Heats message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.Heats
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.Heats & pulsarity.db.Heats.$Shape} Heats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heats.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Heats();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.heats && message.heats.length))
                                message.heats = [];
                            message.heats.push($root.pulsarity.db.Heat.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Heats message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.Heats
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.Heats & pulsarity.db.Heats.$Shape} Heats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heats.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Heats message.
             * @function verify
             * @memberof pulsarity.db.Heats
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Heats.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.heats != null && message.hasOwnProperty("heats")) {
                    if (!Array.isArray(message.heats))
                        return "heats: array expected";
                    for (let i = 0; i < message.heats.length; ++i) {
                        let error = $root.pulsarity.db.Heat.verify(message.heats[i], _depth + 1);
                        if (error)
                            return "heats." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Heats message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.Heats
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.Heats} Heats
             */
            Heats.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.Heats)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.Heats();
                if (object.heats) {
                    if (!Array.isArray(object.heats))
                        throw TypeError(".pulsarity.db.Heats.heats: array expected");
                    message.heats = Array(object.heats.length);
                    for (let i = 0; i < object.heats.length; ++i) {
                        if (typeof object.heats[i] !== "object")
                            throw TypeError(".pulsarity.db.Heats.heats: object expected");
                        message.heats[i] = $root.pulsarity.db.Heat.fromObject(object.heats[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Heats message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.Heats
             * @static
             * @param {pulsarity.db.Heats} message Heats
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Heats.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.heats = [];
                if (message.heats && message.heats.length) {
                    object.heats = Array(message.heats.length);
                    for (let j = 0; j < message.heats.length; ++j)
                        object.heats[j] = $root.pulsarity.db.Heat.toObject(message.heats[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Heats to JSON.
             * @function toJSON
             * @memberof pulsarity.db.Heats
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Heats.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Heats
             * @function getTypeUrl
             * @memberof pulsarity.db.Heats
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Heats.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.Heats";
            };

            return Heats;
        })();

        db.SignalRecord = (function() {

            /**
             * Properties of a SignalRecord.
             * @typedef {Object} pulsarity.db.SignalRecord.$Properties
             * @property {number|null} [timedelta] SignalRecord timedelta
             * @property {number|null} [value] SignalRecord value
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a SignalRecord.
             * @memberof pulsarity.db
             * @interface ISignalRecord
             * @augments pulsarity.db.SignalRecord.$Properties
             * @deprecated Use pulsarity.db.SignalRecord.$Properties instead.
             */

            /**
             * Shape of a SignalRecord.
             * @typedef {pulsarity.db.SignalRecord.$Properties} pulsarity.db.SignalRecord.$Shape
             */

            /**
             * Constructs a new SignalRecord.
             * @memberof pulsarity.db
             * @classdesc Represents a SignalRecord.
             * @constructor
             * @param {pulsarity.db.SignalRecord.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function SignalRecord(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignalRecord timedelta.
             * @member {number} timedelta
             * @memberof pulsarity.db.SignalRecord
             * @instance
             */
            SignalRecord.prototype.timedelta = 0;

            /**
             * SignalRecord value.
             * @member {number} value
             * @memberof pulsarity.db.SignalRecord
             * @instance
             */
            SignalRecord.prototype.value = 0;

            /**
             * Creates a new SignalRecord instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {pulsarity.db.SignalRecord.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.SignalRecord} SignalRecord instance
             * @type {{
             *   (properties: pulsarity.db.SignalRecord.$Shape): pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape;
             *   (properties?: pulsarity.db.SignalRecord.$Properties): pulsarity.db.SignalRecord;
             * }}
             */
            SignalRecord.create = function create(properties) {
                return new SignalRecord(properties);
            };

            /**
             * Encodes the specified SignalRecord message. Does not implicitly {@link pulsarity.db.SignalRecord.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {pulsarity.db.SignalRecord.$Properties} message SignalRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalRecord.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.timedelta != null && Object.hasOwnProperty.call(message, "timedelta"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.timedelta);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.value);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SignalRecord message, length delimited. Does not implicitly {@link pulsarity.db.SignalRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {pulsarity.db.SignalRecord.$Properties} message SignalRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SignalRecord message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape} SignalRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalRecord.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.SignalRecord(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 5)
                                break;
                            if ((value = reader.float()) !== 0)
                                message.timedelta = value;
                            else
                                delete message.timedelta;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 5)
                                break;
                            if ((value = reader.float()) !== 0)
                                message.value = value;
                            else
                                delete message.value;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a SignalRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape} SignalRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignalRecord message.
             * @function verify
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignalRecord.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.timedelta != null && message.hasOwnProperty("timedelta"))
                    if (typeof message.timedelta !== "number")
                        return "timedelta: number expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a SignalRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.SignalRecord} SignalRecord
             */
            SignalRecord.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.SignalRecord)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.SignalRecord();
                if (object.timedelta != null)
                    if (Number(object.timedelta) !== 0)
                        message.timedelta = Number(object.timedelta);
                if (object.value != null)
                    if (Number(object.value) !== 0)
                        message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a SignalRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {pulsarity.db.SignalRecord} message SignalRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignalRecord.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.timedelta = 0;
                    object.value = 0;
                }
                if (message.timedelta != null && message.hasOwnProperty("timedelta"))
                    object.timedelta = options.json && !isFinite(message.timedelta) ? String(message.timedelta) : message.timedelta;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this SignalRecord to JSON.
             * @function toJSON
             * @memberof pulsarity.db.SignalRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SignalRecord
             * @function getTypeUrl
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SignalRecord.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.SignalRecord";
            };

            return SignalRecord;
        })();

        db.SignalHistory = (function() {

            /**
             * Properties of a SignalHistory.
             * @typedef {Object} pulsarity.db.SignalHistory.$Properties
             * @property {Array.<pulsarity.db.SignalRecord.$Properties>|null} [records] SignalHistory records
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a SignalHistory.
             * @memberof pulsarity.db
             * @interface ISignalHistory
             * @augments pulsarity.db.SignalHistory.$Properties
             * @deprecated Use pulsarity.db.SignalHistory.$Properties instead.
             */

            /**
             * Shape of a SignalHistory.
             * @typedef {pulsarity.db.SignalHistory.$Properties} pulsarity.db.SignalHistory.$Shape
             */

            /**
             * Constructs a new SignalHistory.
             * @memberof pulsarity.db
             * @classdesc Represents a SignalHistory.
             * @constructor
             * @param {pulsarity.db.SignalHistory.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function SignalHistory(properties) {
                this.records = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignalHistory records.
             * @member {Array.<pulsarity.db.SignalRecord.$Properties>} records
             * @memberof pulsarity.db.SignalHistory
             * @instance
             */
            SignalHistory.prototype.records = $util.emptyArray;

            /**
             * Creates a new SignalHistory instance using the specified properties.
             * @function create
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {pulsarity.db.SignalHistory.$Properties=} [properties] Properties to set
             * @returns {pulsarity.db.SignalHistory} SignalHistory instance
             * @type {{
             *   (properties: pulsarity.db.SignalHistory.$Shape): pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape;
             *   (properties?: pulsarity.db.SignalHistory.$Properties): pulsarity.db.SignalHistory;
             * }}
             */
            SignalHistory.create = function create(properties) {
                return new SignalHistory(properties);
            };

            /**
             * Encodes the specified SignalHistory message. Does not implicitly {@link pulsarity.db.SignalHistory.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {pulsarity.db.SignalHistory.$Properties} message SignalHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalHistory.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.records != null && message.records.length)
                    for (let i = 0; i < message.records.length; ++i)
                        $root.pulsarity.db.SignalRecord.encode(message.records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SignalHistory message, length delimited. Does not implicitly {@link pulsarity.db.SignalHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {pulsarity.db.SignalHistory.$Properties} message SignalHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SignalHistory message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape} SignalHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalHistory.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.SignalHistory();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push($root.pulsarity.db.SignalRecord.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a SignalHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape} SignalHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignalHistory message.
             * @function verify
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignalHistory.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.records != null && message.hasOwnProperty("records")) {
                    if (!Array.isArray(message.records))
                        return "records: array expected";
                    for (let i = 0; i < message.records.length; ++i) {
                        let error = $root.pulsarity.db.SignalRecord.verify(message.records[i], _depth + 1);
                        if (error)
                            return "records." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SignalHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.db.SignalHistory} SignalHistory
             */
            SignalHistory.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.db.SignalHistory)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.db.SignalHistory();
                if (object.records) {
                    if (!Array.isArray(object.records))
                        throw TypeError(".pulsarity.db.SignalHistory.records: array expected");
                    message.records = Array(object.records.length);
                    for (let i = 0; i < object.records.length; ++i) {
                        if (typeof object.records[i] !== "object")
                            throw TypeError(".pulsarity.db.SignalHistory.records: object expected");
                        message.records[i] = $root.pulsarity.db.SignalRecord.fromObject(object.records[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SignalHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {pulsarity.db.SignalHistory} message SignalHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignalHistory.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.records = [];
                if (message.records && message.records.length) {
                    object.records = Array(message.records.length);
                    for (let j = 0; j < message.records.length; ++j)
                        object.records[j] = $root.pulsarity.db.SignalRecord.toObject(message.records[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this SignalHistory to JSON.
             * @function toJSON
             * @memberof pulsarity.db.SignalHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SignalHistory
             * @function getTypeUrl
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SignalHistory.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.db.SignalHistory";
            };

            return SignalHistory;
        })();

        return db;
    })();

    pulsarity.http = (function() {

        /**
         * Namespace http.
         * @memberof pulsarity
         * @namespace
         */
        const http = {};

        http.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @typedef {Object} pulsarity.http.UserInfo.$Properties
             * @property {boolean|null} [authenticated] UserInfo authenticated
             * @property {string|null} [authId] UserInfo authId
             * @property {string|null} [username] UserInfo username
             * @property {string|null} [dispayName] UserInfo dispayName
             * @property {Array.<string>|null} [permissions] UserInfo permissions
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a UserInfo.
             * @memberof pulsarity.http
             * @interface IUserInfo
             * @augments pulsarity.http.UserInfo.$Properties
             * @deprecated Use pulsarity.http.UserInfo.$Properties instead.
             */

            /**
             * Shape of a UserInfo.
             * @typedef {pulsarity.http.UserInfo.$Properties} pulsarity.http.UserInfo.$Shape
             */

            /**
             * Constructs a new UserInfo.
             * @memberof pulsarity.http
             * @classdesc Represents a UserInfo.
             * @constructor
             * @param {pulsarity.http.UserInfo.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function UserInfo(properties) {
                this.permissions = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo authenticated.
             * @member {boolean} authenticated
             * @memberof pulsarity.http.UserInfo
             * @instance
             */
            UserInfo.prototype.authenticated = false;

            /**
             * UserInfo authId.
             * @member {string} authId
             * @memberof pulsarity.http.UserInfo
             * @instance
             */
            UserInfo.prototype.authId = "";

            /**
             * UserInfo username.
             * @member {string} username
             * @memberof pulsarity.http.UserInfo
             * @instance
             */
            UserInfo.prototype.username = "";

            /**
             * UserInfo dispayName.
             * @member {string} dispayName
             * @memberof pulsarity.http.UserInfo
             * @instance
             */
            UserInfo.prototype.dispayName = "";

            /**
             * UserInfo permissions.
             * @member {Array.<string>} permissions
             * @memberof pulsarity.http.UserInfo
             * @instance
             */
            UserInfo.prototype.permissions = $util.emptyArray;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {pulsarity.http.UserInfo.$Properties=} [properties] Properties to set
             * @returns {pulsarity.http.UserInfo} UserInfo instance
             * @type {{
             *   (properties: pulsarity.http.UserInfo.$Shape): pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape;
             *   (properties?: pulsarity.http.UserInfo.$Properties): pulsarity.http.UserInfo;
             * }}
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link pulsarity.http.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {pulsarity.http.UserInfo.$Properties} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.authenticated != null && Object.hasOwnProperty.call(message, "authenticated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.authenticated);
                if (message.authId != null && Object.hasOwnProperty.call(message, "authId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.authId);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
                if (message.dispayName != null && Object.hasOwnProperty.call(message, "dispayName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dispayName);
                if (message.permissions != null && message.permissions.length)
                    for (let i = 0; i < message.permissions.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.permissions[i]);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link pulsarity.http.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {pulsarity.http.UserInfo.$Properties} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.UserInfo(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.authenticated = value;
                            else
                                delete message.authenticated;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.authId = value;
                            else
                                delete message.authId;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.username = value;
                            else
                                delete message.username;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.dispayName = value;
                            else
                                delete message.dispayName;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if (!(message.permissions && message.permissions.length))
                                message.permissions = [];
                            message.permissions.push(reader.string());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                    if (typeof message.authenticated !== "boolean")
                        return "authenticated: boolean expected";
                if (message.authId != null && message.hasOwnProperty("authId"))
                    if (!$util.isString(message.authId))
                        return "authId: string expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.dispayName != null && message.hasOwnProperty("dispayName"))
                    if (!$util.isString(message.dispayName))
                        return "dispayName: string expected";
                if (message.permissions != null && message.hasOwnProperty("permissions")) {
                    if (!Array.isArray(message.permissions))
                        return "permissions: array expected";
                    for (let i = 0; i < message.permissions.length; ++i)
                        if (!$util.isString(message.permissions[i]))
                            return "permissions: string[] expected";
                }
                return null;
            };

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.http.UserInfo} UserInfo
             */
            UserInfo.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.http.UserInfo)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.http.UserInfo();
                if (object.authenticated != null)
                    if (object.authenticated)
                        message.authenticated = Boolean(object.authenticated);
                if (object.authId != null)
                    if (typeof object.authId !== "string" || object.authId.length)
                        message.authId = String(object.authId);
                if (object.username != null)
                    if (typeof object.username !== "string" || object.username.length)
                        message.username = String(object.username);
                if (object.dispayName != null)
                    if (typeof object.dispayName !== "string" || object.dispayName.length)
                        message.dispayName = String(object.dispayName);
                if (object.permissions) {
                    if (!Array.isArray(object.permissions))
                        throw TypeError(".pulsarity.http.UserInfo.permissions: array expected");
                    message.permissions = Array(object.permissions.length);
                    for (let i = 0; i < object.permissions.length; ++i)
                        message.permissions[i] = String(object.permissions[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {pulsarity.http.UserInfo} message UserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfo.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.permissions = [];
                if (options.defaults) {
                    object.authenticated = false;
                    object.authId = "";
                    object.username = "";
                    object.dispayName = "";
                }
                if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                    object.authenticated = message.authenticated;
                if (message.authId != null && message.hasOwnProperty("authId"))
                    object.authId = message.authId;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.dispayName != null && message.hasOwnProperty("dispayName"))
                    object.dispayName = message.dispayName;
                if (message.permissions && message.permissions.length) {
                    object.permissions = Array(message.permissions.length);
                    for (let j = 0; j < message.permissions.length; ++j)
                        object.permissions[j] = message.permissions[j];
                }
                return object;
            };

            /**
             * Converts this UserInfo to JSON.
             * @function toJSON
             * @memberof pulsarity.http.UserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UserInfo
             * @function getTypeUrl
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UserInfo.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.UserInfo";
            };

            return UserInfo;
        })();

        http.AuthenticatedResponse = (function() {

            /**
             * Properties of an AuthenticatedResponse.
             * @typedef {Object} pulsarity.http.AuthenticatedResponse.$Properties
             * @property {boolean|null} [status] AuthenticatedResponse status
             * @property {pulsarity.http.UserInfo.$Properties|null} [userinfo] AuthenticatedResponse userinfo
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of an AuthenticatedResponse.
             * @memberof pulsarity.http
             * @interface IAuthenticatedResponse
             * @augments pulsarity.http.AuthenticatedResponse.$Properties
             * @deprecated Use pulsarity.http.AuthenticatedResponse.$Properties instead.
             */

            /**
             * Shape of an AuthenticatedResponse.
             * @typedef {pulsarity.http.AuthenticatedResponse.$Properties} pulsarity.http.AuthenticatedResponse.$Shape
             */

            /**
             * Constructs a new AuthenticatedResponse.
             * @memberof pulsarity.http
             * @classdesc Represents an AuthenticatedResponse.
             * @constructor
             * @param {pulsarity.http.AuthenticatedResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function AuthenticatedResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuthenticatedResponse status.
             * @member {boolean} status
             * @memberof pulsarity.http.AuthenticatedResponse
             * @instance
             */
            AuthenticatedResponse.prototype.status = false;

            /**
             * AuthenticatedResponse userinfo.
             * @member {pulsarity.http.UserInfo.$Properties|null|undefined} userinfo
             * @memberof pulsarity.http.AuthenticatedResponse
             * @instance
             */
            AuthenticatedResponse.prototype.userinfo = null;

            /**
             * Creates a new AuthenticatedResponse instance using the specified properties.
             * @function create
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {pulsarity.http.AuthenticatedResponse.$Properties=} [properties] Properties to set
             * @returns {pulsarity.http.AuthenticatedResponse} AuthenticatedResponse instance
             * @type {{
             *   (properties: pulsarity.http.AuthenticatedResponse.$Shape): pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape;
             *   (properties?: pulsarity.http.AuthenticatedResponse.$Properties): pulsarity.http.AuthenticatedResponse;
             * }}
             */
            AuthenticatedResponse.create = function create(properties) {
                return new AuthenticatedResponse(properties);
            };

            /**
             * Encodes the specified AuthenticatedResponse message. Does not implicitly {@link pulsarity.http.AuthenticatedResponse.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {pulsarity.http.AuthenticatedResponse.$Properties} message AuthenticatedResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticatedResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
                if (message.userinfo != null && Object.hasOwnProperty.call(message, "userinfo"))
                    $root.pulsarity.http.UserInfo.encode(message.userinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AuthenticatedResponse message, length delimited. Does not implicitly {@link pulsarity.http.AuthenticatedResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {pulsarity.http.AuthenticatedResponse.$Properties} message AuthenticatedResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticatedResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an AuthenticatedResponse message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape} AuthenticatedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticatedResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.AuthenticatedResponse(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.status = value;
                            else
                                delete message.status;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.userinfo = $root.pulsarity.http.UserInfo.decode(reader, reader.uint32(), undefined, _depth + 1, message.userinfo);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes an AuthenticatedResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape} AuthenticatedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticatedResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthenticatedResponse message.
             * @function verify
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthenticatedResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (typeof message.status !== "boolean")
                        return "status: boolean expected";
                if (message.userinfo != null && message.hasOwnProperty("userinfo")) {
                    let error = $root.pulsarity.http.UserInfo.verify(message.userinfo, _depth + 1);
                    if (error)
                        return "userinfo." + error;
                }
                return null;
            };

            /**
             * Creates an AuthenticatedResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.http.AuthenticatedResponse} AuthenticatedResponse
             */
            AuthenticatedResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.http.AuthenticatedResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.http.AuthenticatedResponse();
                if (object.status != null)
                    if (object.status)
                        message.status = Boolean(object.status);
                if (object.userinfo != null) {
                    if (typeof object.userinfo !== "object")
                        throw TypeError(".pulsarity.http.AuthenticatedResponse.userinfo: object expected");
                    message.userinfo = $root.pulsarity.http.UserInfo.fromObject(object.userinfo, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from an AuthenticatedResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {pulsarity.http.AuthenticatedResponse} message AuthenticatedResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthenticatedResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.status = false;
                    object.userinfo = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                    object.userinfo = $root.pulsarity.http.UserInfo.toObject(message.userinfo, options, _depth + 1);
                return object;
            };

            /**
             * Converts this AuthenticatedResponse to JSON.
             * @function toJSON
             * @memberof pulsarity.http.AuthenticatedResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthenticatedResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AuthenticatedResponse
             * @function getTypeUrl
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AuthenticatedResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.AuthenticatedResponse";
            };

            return AuthenticatedResponse;
        })();

        http.LoginRequest = (function() {

            /**
             * Properties of a LoginRequest.
             * @typedef {Object} pulsarity.http.LoginRequest.$Properties
             * @property {string|null} [username] LoginRequest username
             * @property {string|null} [password] LoginRequest password
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a LoginRequest.
             * @memberof pulsarity.http
             * @interface ILoginRequest
             * @augments pulsarity.http.LoginRequest.$Properties
             * @deprecated Use pulsarity.http.LoginRequest.$Properties instead.
             */

            /**
             * Shape of a LoginRequest.
             * @typedef {pulsarity.http.LoginRequest.$Properties} pulsarity.http.LoginRequest.$Shape
             */

            /**
             * Constructs a new LoginRequest.
             * @memberof pulsarity.http
             * @classdesc Represents a LoginRequest.
             * @constructor
             * @param {pulsarity.http.LoginRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function LoginRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginRequest username.
             * @member {string} username
             * @memberof pulsarity.http.LoginRequest
             * @instance
             */
            LoginRequest.prototype.username = "";

            /**
             * LoginRequest password.
             * @member {string} password
             * @memberof pulsarity.http.LoginRequest
             * @instance
             */
            LoginRequest.prototype.password = "";

            /**
             * Creates a new LoginRequest instance using the specified properties.
             * @function create
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {pulsarity.http.LoginRequest.$Properties=} [properties] Properties to set
             * @returns {pulsarity.http.LoginRequest} LoginRequest instance
             * @type {{
             *   (properties: pulsarity.http.LoginRequest.$Shape): pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape;
             *   (properties?: pulsarity.http.LoginRequest.$Properties): pulsarity.http.LoginRequest;
             * }}
             */
            LoginRequest.create = function create(properties) {
                return new LoginRequest(properties);
            };

            /**
             * Encodes the specified LoginRequest message. Does not implicitly {@link pulsarity.http.LoginRequest.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {pulsarity.http.LoginRequest.$Properties} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link pulsarity.http.LoginRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {pulsarity.http.LoginRequest.$Properties} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.LoginRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.username = value;
                            else
                                delete message.username;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.password = value;
                            else
                                delete message.password;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginRequest message.
             * @function verify
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.http.LoginRequest} LoginRequest
             */
            LoginRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.http.LoginRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.http.LoginRequest();
                if (object.username != null)
                    if (typeof object.username !== "string" || object.username.length)
                        message.username = String(object.username);
                if (object.password != null)
                    if (typeof object.password !== "string" || object.password.length)
                        message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {pulsarity.http.LoginRequest} message LoginRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this LoginRequest to JSON.
             * @function toJSON
             * @memberof pulsarity.http.LoginRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for LoginRequest
             * @function getTypeUrl
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            LoginRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.LoginRequest";
            };

            return LoginRequest;
        })();

        http.LoginResponse = (function() {

            /**
             * Properties of a LoginResponse.
             * @typedef {Object} pulsarity.http.LoginResponse.$Properties
             * @property {boolean|null} [passwordResetRequired] LoginResponse passwordResetRequired
             * @property {pulsarity.http.UserInfo.$Properties|null} [userinfo] LoginResponse userinfo
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a LoginResponse.
             * @memberof pulsarity.http
             * @interface ILoginResponse
             * @augments pulsarity.http.LoginResponse.$Properties
             * @deprecated Use pulsarity.http.LoginResponse.$Properties instead.
             */

            /**
             * Shape of a LoginResponse.
             * @typedef {pulsarity.http.LoginResponse.$Properties} pulsarity.http.LoginResponse.$Shape
             */

            /**
             * Constructs a new LoginResponse.
             * @memberof pulsarity.http
             * @classdesc Represents a LoginResponse.
             * @constructor
             * @param {pulsarity.http.LoginResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function LoginResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginResponse passwordResetRequired.
             * @member {boolean} passwordResetRequired
             * @memberof pulsarity.http.LoginResponse
             * @instance
             */
            LoginResponse.prototype.passwordResetRequired = false;

            /**
             * LoginResponse userinfo.
             * @member {pulsarity.http.UserInfo.$Properties|null|undefined} userinfo
             * @memberof pulsarity.http.LoginResponse
             * @instance
             */
            LoginResponse.prototype.userinfo = null;

            /**
             * Creates a new LoginResponse instance using the specified properties.
             * @function create
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {pulsarity.http.LoginResponse.$Properties=} [properties] Properties to set
             * @returns {pulsarity.http.LoginResponse} LoginResponse instance
             * @type {{
             *   (properties: pulsarity.http.LoginResponse.$Shape): pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape;
             *   (properties?: pulsarity.http.LoginResponse.$Properties): pulsarity.http.LoginResponse;
             * }}
             */
            LoginResponse.create = function create(properties) {
                return new LoginResponse(properties);
            };

            /**
             * Encodes the specified LoginResponse message. Does not implicitly {@link pulsarity.http.LoginResponse.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {pulsarity.http.LoginResponse.$Properties} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.passwordResetRequired != null && Object.hasOwnProperty.call(message, "passwordResetRequired"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.passwordResetRequired);
                if (message.userinfo != null && Object.hasOwnProperty.call(message, "userinfo"))
                    $root.pulsarity.http.UserInfo.encode(message.userinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link pulsarity.http.LoginResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {pulsarity.http.LoginResponse.$Properties} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a LoginResponse message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.LoginResponse(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.passwordResetRequired = value;
                            else
                                delete message.passwordResetRequired;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.userinfo = $root.pulsarity.http.UserInfo.decode(reader, reader.uint32(), undefined, _depth + 1, message.userinfo);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginResponse message.
             * @function verify
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.passwordResetRequired != null && message.hasOwnProperty("passwordResetRequired"))
                    if (typeof message.passwordResetRequired !== "boolean")
                        return "passwordResetRequired: boolean expected";
                if (message.userinfo != null && message.hasOwnProperty("userinfo")) {
                    let error = $root.pulsarity.http.UserInfo.verify(message.userinfo, _depth + 1);
                    if (error)
                        return "userinfo." + error;
                }
                return null;
            };

            /**
             * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.http.LoginResponse} LoginResponse
             */
            LoginResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.http.LoginResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.http.LoginResponse();
                if (object.passwordResetRequired != null)
                    if (object.passwordResetRequired)
                        message.passwordResetRequired = Boolean(object.passwordResetRequired);
                if (object.userinfo != null) {
                    if (typeof object.userinfo !== "object")
                        throw TypeError(".pulsarity.http.LoginResponse.userinfo: object expected");
                    message.userinfo = $root.pulsarity.http.UserInfo.fromObject(object.userinfo, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {pulsarity.http.LoginResponse} message LoginResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.passwordResetRequired = false;
                    object.userinfo = null;
                }
                if (message.passwordResetRequired != null && message.hasOwnProperty("passwordResetRequired"))
                    object.passwordResetRequired = message.passwordResetRequired;
                if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                    object.userinfo = $root.pulsarity.http.UserInfo.toObject(message.userinfo, options, _depth + 1);
                return object;
            };

            /**
             * Converts this LoginResponse to JSON.
             * @function toJSON
             * @memberof pulsarity.http.LoginResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for LoginResponse
             * @function getTypeUrl
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            LoginResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.LoginResponse";
            };

            return LoginResponse;
        })();

        http.ResetPasswordRequest = (function() {

            /**
             * Properties of a ResetPasswordRequest.
             * @typedef {Object} pulsarity.http.ResetPasswordRequest.$Properties
             * @property {string|null} [oldPassword] ResetPasswordRequest oldPassword
             * @property {string|null} [newPassword] ResetPasswordRequest newPassword
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a ResetPasswordRequest.
             * @memberof pulsarity.http
             * @interface IResetPasswordRequest
             * @augments pulsarity.http.ResetPasswordRequest.$Properties
             * @deprecated Use pulsarity.http.ResetPasswordRequest.$Properties instead.
             */

            /**
             * Shape of a ResetPasswordRequest.
             * @typedef {pulsarity.http.ResetPasswordRequest.$Properties} pulsarity.http.ResetPasswordRequest.$Shape
             */

            /**
             * Constructs a new ResetPasswordRequest.
             * @memberof pulsarity.http
             * @classdesc Represents a ResetPasswordRequest.
             * @constructor
             * @param {pulsarity.http.ResetPasswordRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function ResetPasswordRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResetPasswordRequest oldPassword.
             * @member {string} oldPassword
             * @memberof pulsarity.http.ResetPasswordRequest
             * @instance
             */
            ResetPasswordRequest.prototype.oldPassword = "";

            /**
             * ResetPasswordRequest newPassword.
             * @member {string} newPassword
             * @memberof pulsarity.http.ResetPasswordRequest
             * @instance
             */
            ResetPasswordRequest.prototype.newPassword = "";

            /**
             * Creates a new ResetPasswordRequest instance using the specified properties.
             * @function create
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {pulsarity.http.ResetPasswordRequest.$Properties=} [properties] Properties to set
             * @returns {pulsarity.http.ResetPasswordRequest} ResetPasswordRequest instance
             * @type {{
             *   (properties: pulsarity.http.ResetPasswordRequest.$Shape): pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape;
             *   (properties?: pulsarity.http.ResetPasswordRequest.$Properties): pulsarity.http.ResetPasswordRequest;
             * }}
             */
            ResetPasswordRequest.create = function create(properties) {
                return new ResetPasswordRequest(properties);
            };

            /**
             * Encodes the specified ResetPasswordRequest message. Does not implicitly {@link pulsarity.http.ResetPasswordRequest.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {pulsarity.http.ResetPasswordRequest.$Properties} message ResetPasswordRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetPasswordRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.oldPassword != null && Object.hasOwnProperty.call(message, "oldPassword"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.oldPassword);
                if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPassword);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ResetPasswordRequest message, length delimited. Does not implicitly {@link pulsarity.http.ResetPasswordRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {pulsarity.http.ResetPasswordRequest.$Properties} message ResetPasswordRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetPasswordRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a ResetPasswordRequest message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape} ResetPasswordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetPasswordRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.ResetPasswordRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.oldPassword = value;
                            else
                                delete message.oldPassword;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.newPassword = value;
                            else
                                delete message.newPassword;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a ResetPasswordRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape} ResetPasswordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetPasswordRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResetPasswordRequest message.
             * @function verify
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResetPasswordRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                    if (!$util.isString(message.oldPassword))
                        return "oldPassword: string expected";
                if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                    if (!$util.isString(message.newPassword))
                        return "newPassword: string expected";
                return null;
            };

            /**
             * Creates a ResetPasswordRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.http.ResetPasswordRequest} ResetPasswordRequest
             */
            ResetPasswordRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.http.ResetPasswordRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.http.ResetPasswordRequest();
                if (object.oldPassword != null)
                    if (typeof object.oldPassword !== "string" || object.oldPassword.length)
                        message.oldPassword = String(object.oldPassword);
                if (object.newPassword != null)
                    if (typeof object.newPassword !== "string" || object.newPassword.length)
                        message.newPassword = String(object.newPassword);
                return message;
            };

            /**
             * Creates a plain object from a ResetPasswordRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {pulsarity.http.ResetPasswordRequest} message ResetPasswordRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResetPasswordRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.oldPassword = "";
                    object.newPassword = "";
                }
                if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                    object.oldPassword = message.oldPassword;
                if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                    object.newPassword = message.newPassword;
                return object;
            };

            /**
             * Converts this ResetPasswordRequest to JSON.
             * @function toJSON
             * @memberof pulsarity.http.ResetPasswordRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResetPasswordRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ResetPasswordRequest
             * @function getTypeUrl
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ResetPasswordRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.ResetPasswordRequest";
            };

            return ResetPasswordRequest;
        })();

        http.ServerData = (function() {

            /**
             * Properties of a ServerData.
             * @typedef {Object} pulsarity.http.ServerData.$Properties
             * @property {string|null} [version] ServerData version
             * @property {string|null} [serverName] ServerData serverName
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a ServerData.
             * @memberof pulsarity.http
             * @interface IServerData
             * @augments pulsarity.http.ServerData.$Properties
             * @deprecated Use pulsarity.http.ServerData.$Properties instead.
             */

            /**
             * Shape of a ServerData.
             * @typedef {pulsarity.http.ServerData.$Properties} pulsarity.http.ServerData.$Shape
             */

            /**
             * Constructs a new ServerData.
             * @memberof pulsarity.http
             * @classdesc Represents a ServerData.
             * @constructor
             * @param {pulsarity.http.ServerData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function ServerData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServerData version.
             * @member {string} version
             * @memberof pulsarity.http.ServerData
             * @instance
             */
            ServerData.prototype.version = "";

            /**
             * ServerData serverName.
             * @member {string} serverName
             * @memberof pulsarity.http.ServerData
             * @instance
             */
            ServerData.prototype.serverName = "";

            /**
             * Creates a new ServerData instance using the specified properties.
             * @function create
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {pulsarity.http.ServerData.$Properties=} [properties] Properties to set
             * @returns {pulsarity.http.ServerData} ServerData instance
             * @type {{
             *   (properties: pulsarity.http.ServerData.$Shape): pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape;
             *   (properties?: pulsarity.http.ServerData.$Properties): pulsarity.http.ServerData;
             * }}
             */
            ServerData.create = function create(properties) {
                return new ServerData(properties);
            };

            /**
             * Encodes the specified ServerData message. Does not implicitly {@link pulsarity.http.ServerData.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {pulsarity.http.ServerData.$Properties} message ServerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerData.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                if (message.serverName != null && Object.hasOwnProperty.call(message, "serverName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverName);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ServerData message, length delimited. Does not implicitly {@link pulsarity.http.ServerData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {pulsarity.http.ServerData.$Properties} message ServerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a ServerData message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape} ServerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerData.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.ServerData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.version = value;
                            else
                                delete message.version;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.serverName = value;
                            else
                                delete message.serverName;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a ServerData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape} ServerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServerData message.
             * @function verify
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServerData.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.serverName != null && message.hasOwnProperty("serverName"))
                    if (!$util.isString(message.serverName))
                        return "serverName: string expected";
                return null;
            };

            /**
             * Creates a ServerData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.http.ServerData} ServerData
             */
            ServerData.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.http.ServerData)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.http.ServerData();
                if (object.version != null)
                    if (typeof object.version !== "string" || object.version.length)
                        message.version = String(object.version);
                if (object.serverName != null)
                    if (typeof object.serverName !== "string" || object.serverName.length)
                        message.serverName = String(object.serverName);
                return message;
            };

            /**
             * Creates a plain object from a ServerData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {pulsarity.http.ServerData} message ServerData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServerData.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.version = "";
                    object.serverName = "";
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.serverName != null && message.hasOwnProperty("serverName"))
                    object.serverName = message.serverName;
                return object;
            };

            /**
             * Converts this ServerData to JSON.
             * @function toJSON
             * @memberof pulsarity.http.ServerData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServerData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ServerData
             * @function getTypeUrl
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ServerData.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.ServerData";
            };

            return ServerData;
        })();

        return http;
    })();

    pulsarity.ws = (function() {

        /**
         * Namespace ws.
         * @memberof pulsarity
         * @namespace
         */
        const ws = {};

        /**
         * EventID enum.
         * @name pulsarity.ws.EventID
         * @enum {number}
         * @property {number} EVENT_UNSPECIFIED=0 EVENT_UNSPECIFIED value
         * @property {number} EVENT_HEARTBEAT=1 EVENT_HEARTBEAT value
         * @property {number} EVENT_PERMISSIONS_UPDATE=2 EVENT_PERMISSIONS_UPDATE value
         * @property {number} EVENT_STARTUP=3 EVENT_STARTUP value
         * @property {number} EVENT_SHUTDOWN=4 EVENT_SHUTDOWN value
         * @property {number} EVENT_RESTART=5 EVENT_RESTART value
         * @property {number} EVENT_RACE_SCHEDULE=32 EVENT_RACE_SCHEDULE value
         * @property {number} EVENT_RACE_STAGE=33 EVENT_RACE_STAGE value
         * @property {number} EVENT_RACE_START=34 EVENT_RACE_START value
         * @property {number} EVENT_RACE_FINISH=35 EVENT_RACE_FINISH value
         * @property {number} EVENT_RACE_STOP=36 EVENT_RACE_STOP value
         * @property {number} EVENT_RACE_PAUSE=37 EVENT_RACE_PAUSE value
         * @property {number} EVENT_RACE_RESUME=38 EVENT_RACE_RESUME value
         * @property {number} EVENT_PILOT_ADD=64 EVENT_PILOT_ADD value
         * @property {number} EVENT_PILOT_ALTER=65 EVENT_PILOT_ALTER value
         * @property {number} EVENT_PILOT_DELETE=66 EVENT_PILOT_DELETE value
         */
        ws.EventID = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EVENT_UNSPECIFIED"] = 0;
            values[valuesById[1] = "EVENT_HEARTBEAT"] = 1;
            values[valuesById[2] = "EVENT_PERMISSIONS_UPDATE"] = 2;
            values[valuesById[3] = "EVENT_STARTUP"] = 3;
            values[valuesById[4] = "EVENT_SHUTDOWN"] = 4;
            values[valuesById[5] = "EVENT_RESTART"] = 5;
            values[valuesById[32] = "EVENT_RACE_SCHEDULE"] = 32;
            values[valuesById[33] = "EVENT_RACE_STAGE"] = 33;
            values[valuesById[34] = "EVENT_RACE_START"] = 34;
            values[valuesById[35] = "EVENT_RACE_FINISH"] = 35;
            values[valuesById[36] = "EVENT_RACE_STOP"] = 36;
            values[valuesById[37] = "EVENT_RACE_PAUSE"] = 37;
            values[valuesById[38] = "EVENT_RACE_RESUME"] = 38;
            values[valuesById[64] = "EVENT_PILOT_ADD"] = 64;
            values[valuesById[65] = "EVENT_PILOT_ALTER"] = 65;
            values[valuesById[66] = "EVENT_PILOT_DELETE"] = 66;
            return values;
        })();

        ws.PilotAddData = (function() {

            /**
             * Properties of a PilotAddData.
             * @typedef {Object} pulsarity.ws.PilotAddData.$Properties
             * @property {number|null} [pilotId] PilotAddData pilotId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a PilotAddData.
             * @memberof pulsarity.ws
             * @interface IPilotAddData
             * @augments pulsarity.ws.PilotAddData.$Properties
             * @deprecated Use pulsarity.ws.PilotAddData.$Properties instead.
             */

            /**
             * Shape of a PilotAddData.
             * @typedef {pulsarity.ws.PilotAddData.$Properties} pulsarity.ws.PilotAddData.$Shape
             */

            /**
             * Constructs a new PilotAddData.
             * @memberof pulsarity.ws
             * @classdesc Represents a PilotAddData.
             * @constructor
             * @param {pulsarity.ws.PilotAddData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function PilotAddData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PilotAddData pilotId.
             * @member {number} pilotId
             * @memberof pulsarity.ws.PilotAddData
             * @instance
             */
            PilotAddData.prototype.pilotId = 0;

            /**
             * Creates a new PilotAddData instance using the specified properties.
             * @function create
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {pulsarity.ws.PilotAddData.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ws.PilotAddData} PilotAddData instance
             * @type {{
             *   (properties: pulsarity.ws.PilotAddData.$Shape): pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape;
             *   (properties?: pulsarity.ws.PilotAddData.$Properties): pulsarity.ws.PilotAddData;
             * }}
             */
            PilotAddData.create = function create(properties) {
                return new PilotAddData(properties);
            };

            /**
             * Encodes the specified PilotAddData message. Does not implicitly {@link pulsarity.ws.PilotAddData.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {pulsarity.ws.PilotAddData.$Properties} message PilotAddData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PilotAddData.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.pilotId != null && Object.hasOwnProperty.call(message, "pilotId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pilotId);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PilotAddData message, length delimited. Does not implicitly {@link pulsarity.ws.PilotAddData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {pulsarity.ws.PilotAddData.$Properties} message PilotAddData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PilotAddData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a PilotAddData message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape} PilotAddData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PilotAddData.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.PilotAddData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.pilotId = value;
                            else
                                delete message.pilotId;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a PilotAddData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape} PilotAddData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PilotAddData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PilotAddData message.
             * @function verify
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PilotAddData.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilotId != null && message.hasOwnProperty("pilotId"))
                    if (!$util.isInteger(message.pilotId))
                        return "pilotId: integer expected";
                return null;
            };

            /**
             * Creates a PilotAddData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ws.PilotAddData} PilotAddData
             */
            PilotAddData.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.ws.PilotAddData)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.ws.PilotAddData();
                if (object.pilotId != null)
                    if (Number(object.pilotId) !== 0)
                        message.pilotId = object.pilotId | 0;
                return message;
            };

            /**
             * Creates a plain object from a PilotAddData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {pulsarity.ws.PilotAddData} message PilotAddData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PilotAddData.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.pilotId = 0;
                if (message.pilotId != null && message.hasOwnProperty("pilotId"))
                    object.pilotId = message.pilotId;
                return object;
            };

            /**
             * Converts this PilotAddData to JSON.
             * @function toJSON
             * @memberof pulsarity.ws.PilotAddData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PilotAddData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PilotAddData
             * @function getTypeUrl
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PilotAddData.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ws.PilotAddData";
            };

            return PilotAddData;
        })();

        ws.PilotAlterData = (function() {

            /**
             * Properties of a PilotAlterData.
             * @typedef {Object} pulsarity.ws.PilotAlterData.$Properties
             * @property {number|null} [pilotId] PilotAlterData pilotId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a PilotAlterData.
             * @memberof pulsarity.ws
             * @interface IPilotAlterData
             * @augments pulsarity.ws.PilotAlterData.$Properties
             * @deprecated Use pulsarity.ws.PilotAlterData.$Properties instead.
             */

            /**
             * Shape of a PilotAlterData.
             * @typedef {pulsarity.ws.PilotAlterData.$Properties} pulsarity.ws.PilotAlterData.$Shape
             */

            /**
             * Constructs a new PilotAlterData.
             * @memberof pulsarity.ws
             * @classdesc Represents a PilotAlterData.
             * @constructor
             * @param {pulsarity.ws.PilotAlterData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function PilotAlterData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PilotAlterData pilotId.
             * @member {number} pilotId
             * @memberof pulsarity.ws.PilotAlterData
             * @instance
             */
            PilotAlterData.prototype.pilotId = 0;

            /**
             * Creates a new PilotAlterData instance using the specified properties.
             * @function create
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {pulsarity.ws.PilotAlterData.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ws.PilotAlterData} PilotAlterData instance
             * @type {{
             *   (properties: pulsarity.ws.PilotAlterData.$Shape): pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape;
             *   (properties?: pulsarity.ws.PilotAlterData.$Properties): pulsarity.ws.PilotAlterData;
             * }}
             */
            PilotAlterData.create = function create(properties) {
                return new PilotAlterData(properties);
            };

            /**
             * Encodes the specified PilotAlterData message. Does not implicitly {@link pulsarity.ws.PilotAlterData.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {pulsarity.ws.PilotAlterData.$Properties} message PilotAlterData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PilotAlterData.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.pilotId != null && Object.hasOwnProperty.call(message, "pilotId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pilotId);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PilotAlterData message, length delimited. Does not implicitly {@link pulsarity.ws.PilotAlterData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {pulsarity.ws.PilotAlterData.$Properties} message PilotAlterData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PilotAlterData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a PilotAlterData message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape} PilotAlterData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PilotAlterData.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.PilotAlterData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.pilotId = value;
                            else
                                delete message.pilotId;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a PilotAlterData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape} PilotAlterData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PilotAlterData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PilotAlterData message.
             * @function verify
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PilotAlterData.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilotId != null && message.hasOwnProperty("pilotId"))
                    if (!$util.isInteger(message.pilotId))
                        return "pilotId: integer expected";
                return null;
            };

            /**
             * Creates a PilotAlterData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ws.PilotAlterData} PilotAlterData
             */
            PilotAlterData.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.ws.PilotAlterData)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.ws.PilotAlterData();
                if (object.pilotId != null)
                    if (Number(object.pilotId) !== 0)
                        message.pilotId = object.pilotId | 0;
                return message;
            };

            /**
             * Creates a plain object from a PilotAlterData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {pulsarity.ws.PilotAlterData} message PilotAlterData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PilotAlterData.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.pilotId = 0;
                if (message.pilotId != null && message.hasOwnProperty("pilotId"))
                    object.pilotId = message.pilotId;
                return object;
            };

            /**
             * Converts this PilotAlterData to JSON.
             * @function toJSON
             * @memberof pulsarity.ws.PilotAlterData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PilotAlterData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PilotAlterData
             * @function getTypeUrl
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PilotAlterData.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ws.PilotAlterData";
            };

            return PilotAlterData;
        })();

        ws.PilotDeleteData = (function() {

            /**
             * Properties of a PilotDeleteData.
             * @typedef {Object} pulsarity.ws.PilotDeleteData.$Properties
             * @property {number|null} [pilotId] PilotDeleteData pilotId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a PilotDeleteData.
             * @memberof pulsarity.ws
             * @interface IPilotDeleteData
             * @augments pulsarity.ws.PilotDeleteData.$Properties
             * @deprecated Use pulsarity.ws.PilotDeleteData.$Properties instead.
             */

            /**
             * Shape of a PilotDeleteData.
             * @typedef {pulsarity.ws.PilotDeleteData.$Properties} pulsarity.ws.PilotDeleteData.$Shape
             */

            /**
             * Constructs a new PilotDeleteData.
             * @memberof pulsarity.ws
             * @classdesc Represents a PilotDeleteData.
             * @constructor
             * @param {pulsarity.ws.PilotDeleteData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function PilotDeleteData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PilotDeleteData pilotId.
             * @member {number} pilotId
             * @memberof pulsarity.ws.PilotDeleteData
             * @instance
             */
            PilotDeleteData.prototype.pilotId = 0;

            /**
             * Creates a new PilotDeleteData instance using the specified properties.
             * @function create
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {pulsarity.ws.PilotDeleteData.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ws.PilotDeleteData} PilotDeleteData instance
             * @type {{
             *   (properties: pulsarity.ws.PilotDeleteData.$Shape): pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape;
             *   (properties?: pulsarity.ws.PilotDeleteData.$Properties): pulsarity.ws.PilotDeleteData;
             * }}
             */
            PilotDeleteData.create = function create(properties) {
                return new PilotDeleteData(properties);
            };

            /**
             * Encodes the specified PilotDeleteData message. Does not implicitly {@link pulsarity.ws.PilotDeleteData.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {pulsarity.ws.PilotDeleteData.$Properties} message PilotDeleteData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PilotDeleteData.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.pilotId != null && Object.hasOwnProperty.call(message, "pilotId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pilotId);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PilotDeleteData message, length delimited. Does not implicitly {@link pulsarity.ws.PilotDeleteData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {pulsarity.ws.PilotDeleteData.$Properties} message PilotDeleteData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PilotDeleteData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a PilotDeleteData message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape} PilotDeleteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PilotDeleteData.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.PilotDeleteData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.pilotId = value;
                            else
                                delete message.pilotId;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a PilotDeleteData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape} PilotDeleteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PilotDeleteData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PilotDeleteData message.
             * @function verify
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PilotDeleteData.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilotId != null && message.hasOwnProperty("pilotId"))
                    if (!$util.isInteger(message.pilotId))
                        return "pilotId: integer expected";
                return null;
            };

            /**
             * Creates a PilotDeleteData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ws.PilotDeleteData} PilotDeleteData
             */
            PilotDeleteData.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.ws.PilotDeleteData)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.ws.PilotDeleteData();
                if (object.pilotId != null)
                    if (Number(object.pilotId) !== 0)
                        message.pilotId = object.pilotId | 0;
                return message;
            };

            /**
             * Creates a plain object from a PilotDeleteData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {pulsarity.ws.PilotDeleteData} message PilotDeleteData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PilotDeleteData.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.pilotId = 0;
                if (message.pilotId != null && message.hasOwnProperty("pilotId"))
                    object.pilotId = message.pilotId;
                return object;
            };

            /**
             * Converts this PilotDeleteData to JSON.
             * @function toJSON
             * @memberof pulsarity.ws.PilotDeleteData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PilotDeleteData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PilotDeleteData
             * @function getTypeUrl
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PilotDeleteData.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ws.PilotDeleteData";
            };

            return PilotDeleteData;
        })();

        ws.WebsocketEvent = (function() {

            /**
             * Properties of a WebsocketEvent.
             * @typedef {Object} pulsarity.ws.WebsocketEvent.$Properties
             * @property {Uint8Array|null} [uuid] WebsocketEvent uuid
             * @property {pulsarity.ws.EventID|null} [eventId] WebsocketEvent eventId
             * @property {pulsarity.ws.PilotAddData.$Properties|null} [pilotAdd] WebsocketEvent pilotAdd
             * @property {pulsarity.ws.PilotAlterData.$Properties|null} [pilotAlter] WebsocketEvent pilotAlter
             * @property {pulsarity.ws.PilotDeleteData.$Properties|null} [pilotDelete] WebsocketEvent pilotDelete
             * @property {"pilotAdd"|"pilotAlter"|"pilotDelete"} [eventData] WebsocketEvent eventData
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a WebsocketEvent.
             * @memberof pulsarity.ws
             * @interface IWebsocketEvent
             * @augments pulsarity.ws.WebsocketEvent.$Properties
             * @deprecated Use pulsarity.ws.WebsocketEvent.$Properties instead.
             */

            /**
             * Narrowed shape of a WebsocketEvent.
             * @typedef {{
             *   uuid?: Uint8Array|null;
             *   eventId?: pulsarity.ws.EventID|null;
             *   pilotAdd?: pulsarity.ws.PilotAddData.$Shape|null;
             *   pilotAlter?: pulsarity.ws.PilotAlterData.$Shape|null;
             *   pilotDelete?: pulsarity.ws.PilotDeleteData.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ eventData?: undefined; pilotAdd?: null; pilotAlter?: null; pilotDelete?: null }|{ eventData?: "pilotAdd"; pilotAdd: pulsarity.ws.PilotAddData.$Shape; pilotAlter?: null; pilotDelete?: null }|{ eventData?: "pilotAlter"; pilotAdd?: null; pilotAlter: pulsarity.ws.PilotAlterData.$Shape; pilotDelete?: null }|{ eventData?: "pilotDelete"; pilotAdd?: null; pilotAlter?: null; pilotDelete: pulsarity.ws.PilotDeleteData.$Shape })
             * )} pulsarity.ws.WebsocketEvent.$Shape
             */

            /**
             * Constructs a new WebsocketEvent.
             * @memberof pulsarity.ws
             * @classdesc Represents a WebsocketEvent.
             * @constructor
             * @param {pulsarity.ws.WebsocketEvent.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function WebsocketEvent(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebsocketEvent uuid.
             * @member {Uint8Array} uuid
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            WebsocketEvent.prototype.uuid = $util.newBuffer([]);

            /**
             * WebsocketEvent eventId.
             * @member {pulsarity.ws.EventID} eventId
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            WebsocketEvent.prototype.eventId = 0;

            /**
             * WebsocketEvent pilotAdd.
             * @member {pulsarity.ws.PilotAddData.$Properties|null|undefined} pilotAdd
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            WebsocketEvent.prototype.pilotAdd = null;

            /**
             * WebsocketEvent pilotAlter.
             * @member {pulsarity.ws.PilotAlterData.$Properties|null|undefined} pilotAlter
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            WebsocketEvent.prototype.pilotAlter = null;

            /**
             * WebsocketEvent pilotDelete.
             * @member {pulsarity.ws.PilotDeleteData.$Properties|null|undefined} pilotDelete
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            WebsocketEvent.prototype.pilotDelete = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * WebsocketEvent eventData.
             * @member {"pilotAdd"|"pilotAlter"|"pilotDelete"|undefined} eventData
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            Object.defineProperty(WebsocketEvent.prototype, "eventData", {
                get: $util.oneOfGetter($oneOfFields = ["pilotAdd", "pilotAlter", "pilotDelete"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new WebsocketEvent instance using the specified properties.
             * @function create
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {pulsarity.ws.WebsocketEvent.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ws.WebsocketEvent} WebsocketEvent instance
             * @type {{
             *   (properties: pulsarity.ws.WebsocketEvent.$Shape): pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape;
             *   (properties?: pulsarity.ws.WebsocketEvent.$Properties): pulsarity.ws.WebsocketEvent;
             * }}
             */
            WebsocketEvent.create = function create(properties) {
                return new WebsocketEvent(properties);
            };

            /**
             * Encodes the specified WebsocketEvent message. Does not implicitly {@link pulsarity.ws.WebsocketEvent.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {pulsarity.ws.WebsocketEvent.$Properties} message WebsocketEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebsocketEvent.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.uuid);
                if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.eventId);
                if (message.pilotAdd != null && Object.hasOwnProperty.call(message, "pilotAdd"))
                    $root.pulsarity.ws.PilotAddData.encode(message.pilotAdd, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
                if (message.pilotAlter != null && Object.hasOwnProperty.call(message, "pilotAlter"))
                    $root.pulsarity.ws.PilotAlterData.encode(message.pilotAlter, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
                if (message.pilotDelete != null && Object.hasOwnProperty.call(message, "pilotDelete"))
                    $root.pulsarity.ws.PilotDeleteData.encode(message.pilotDelete, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified WebsocketEvent message, length delimited. Does not implicitly {@link pulsarity.ws.WebsocketEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {pulsarity.ws.WebsocketEvent.$Properties} message WebsocketEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebsocketEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a WebsocketEvent message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape} WebsocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebsocketEvent.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.WebsocketEvent(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.bytes()).length)
                                message.uuid = value;
                            else
                                delete message.uuid;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.eventId = value;
                            else
                                delete message.eventId;
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            message.pilotAdd = $root.pulsarity.ws.PilotAddData.decode(reader, reader.uint32(), undefined, _depth + 1, message.pilotAdd);
                            message.eventData = "pilotAdd";
                            continue;
                        }
                    case 17: {
                            if (wireType !== 2)
                                break;
                            message.pilotAlter = $root.pulsarity.ws.PilotAlterData.decode(reader, reader.uint32(), undefined, _depth + 1, message.pilotAlter);
                            message.eventData = "pilotAlter";
                            continue;
                        }
                    case 18: {
                            if (wireType !== 2)
                                break;
                            message.pilotDelete = $root.pulsarity.ws.PilotDeleteData.decode(reader, reader.uint32(), undefined, _depth + 1, message.pilotDelete);
                            message.eventData = "pilotDelete";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a WebsocketEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape} WebsocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebsocketEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebsocketEvent message.
             * @function verify
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebsocketEvent.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!(message.uuid && typeof message.uuid.length === "number" || $util.isString(message.uuid)))
                        return "uuid: buffer expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    switch (message.eventId) {
                    default:
                        return "eventId: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 64:
                    case 65:
                    case 66:
                        break;
                    }
                if (message.pilotAdd != null && message.hasOwnProperty("pilotAdd")) {
                    properties.eventData = 1;
                    {
                        let error = $root.pulsarity.ws.PilotAddData.verify(message.pilotAdd, _depth + 1);
                        if (error)
                            return "pilotAdd." + error;
                    }
                }
                if (message.pilotAlter != null && message.hasOwnProperty("pilotAlter")) {
                    if (properties.eventData === 1)
                        return "eventData: multiple values";
                    properties.eventData = 1;
                    {
                        let error = $root.pulsarity.ws.PilotAlterData.verify(message.pilotAlter, _depth + 1);
                        if (error)
                            return "pilotAlter." + error;
                    }
                }
                if (message.pilotDelete != null && message.hasOwnProperty("pilotDelete")) {
                    if (properties.eventData === 1)
                        return "eventData: multiple values";
                    properties.eventData = 1;
                    {
                        let error = $root.pulsarity.ws.PilotDeleteData.verify(message.pilotDelete, _depth + 1);
                        if (error)
                            return "pilotDelete." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a WebsocketEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ws.WebsocketEvent} WebsocketEvent
             */
            WebsocketEvent.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.pulsarity.ws.WebsocketEvent)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.pulsarity.ws.WebsocketEvent();
                if (object.uuid != null)
                    if (object.uuid.length)
                        if (typeof object.uuid === "string")
                            $util.base64.decode(object.uuid, message.uuid = $util.newBuffer($util.base64.length(object.uuid)), 0);
                        else if (object.uuid.length >= 0)
                            message.uuid = object.uuid;
                if (object.eventId !== 0 && (typeof object.eventId !== "string" || $root.pulsarity.ws.EventID[object.eventId] !== 0))
                    switch (object.eventId) {
                    default:
                        if (typeof object.eventId === "number") {
                            message.eventId = object.eventId;
                            break;
                        }
                        break;
                    case "EVENT_UNSPECIFIED":
                    case 0:
                        message.eventId = 0;
                        break;
                    case "EVENT_HEARTBEAT":
                    case 1:
                        message.eventId = 1;
                        break;
                    case "EVENT_PERMISSIONS_UPDATE":
                    case 2:
                        message.eventId = 2;
                        break;
                    case "EVENT_STARTUP":
                    case 3:
                        message.eventId = 3;
                        break;
                    case "EVENT_SHUTDOWN":
                    case 4:
                        message.eventId = 4;
                        break;
                    case "EVENT_RESTART":
                    case 5:
                        message.eventId = 5;
                        break;
                    case "EVENT_RACE_SCHEDULE":
                    case 32:
                        message.eventId = 32;
                        break;
                    case "EVENT_RACE_STAGE":
                    case 33:
                        message.eventId = 33;
                        break;
                    case "EVENT_RACE_START":
                    case 34:
                        message.eventId = 34;
                        break;
                    case "EVENT_RACE_FINISH":
                    case 35:
                        message.eventId = 35;
                        break;
                    case "EVENT_RACE_STOP":
                    case 36:
                        message.eventId = 36;
                        break;
                    case "EVENT_RACE_PAUSE":
                    case 37:
                        message.eventId = 37;
                        break;
                    case "EVENT_RACE_RESUME":
                    case 38:
                        message.eventId = 38;
                        break;
                    case "EVENT_PILOT_ADD":
                    case 64:
                        message.eventId = 64;
                        break;
                    case "EVENT_PILOT_ALTER":
                    case 65:
                        message.eventId = 65;
                        break;
                    case "EVENT_PILOT_DELETE":
                    case 66:
                        message.eventId = 66;
                        break;
                    }
                if (object.pilotAdd != null) {
                    if (typeof object.pilotAdd !== "object")
                        throw TypeError(".pulsarity.ws.WebsocketEvent.pilotAdd: object expected");
                    message.pilotAdd = $root.pulsarity.ws.PilotAddData.fromObject(object.pilotAdd, _depth + 1);
                }
                if (object.pilotAlter != null) {
                    if (typeof object.pilotAlter !== "object")
                        throw TypeError(".pulsarity.ws.WebsocketEvent.pilotAlter: object expected");
                    message.pilotAlter = $root.pulsarity.ws.PilotAlterData.fromObject(object.pilotAlter, _depth + 1);
                }
                if (object.pilotDelete != null) {
                    if (typeof object.pilotDelete !== "object")
                        throw TypeError(".pulsarity.ws.WebsocketEvent.pilotDelete: object expected");
                    message.pilotDelete = $root.pulsarity.ws.PilotDeleteData.fromObject(object.pilotDelete, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a WebsocketEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {pulsarity.ws.WebsocketEvent} message WebsocketEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebsocketEvent.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.uuid = "";
                    else {
                        object.uuid = [];
                        if (options.bytes !== Array)
                            object.uuid = $util.newBuffer(object.uuid);
                    }
                    object.eventId = options.enums === String ? "EVENT_UNSPECIFIED" : 0;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = options.bytes === String ? $util.base64.encode(message.uuid, 0, message.uuid.length) : options.bytes === Array ? Array.prototype.slice.call(message.uuid) : message.uuid;
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId = options.enums === String ? $root.pulsarity.ws.EventID[message.eventId] === undefined ? message.eventId : $root.pulsarity.ws.EventID[message.eventId] : message.eventId;
                if (message.pilotAdd != null && message.hasOwnProperty("pilotAdd")) {
                    object.pilotAdd = $root.pulsarity.ws.PilotAddData.toObject(message.pilotAdd, options, _depth + 1);
                    if (options.oneofs)
                        object.eventData = "pilotAdd";
                }
                if (message.pilotAlter != null && message.hasOwnProperty("pilotAlter")) {
                    object.pilotAlter = $root.pulsarity.ws.PilotAlterData.toObject(message.pilotAlter, options, _depth + 1);
                    if (options.oneofs)
                        object.eventData = "pilotAlter";
                }
                if (message.pilotDelete != null && message.hasOwnProperty("pilotDelete")) {
                    object.pilotDelete = $root.pulsarity.ws.PilotDeleteData.toObject(message.pilotDelete, options, _depth + 1);
                    if (options.oneofs)
                        object.eventData = "pilotDelete";
                }
                return object;
            };

            /**
             * Converts this WebsocketEvent to JSON.
             * @function toJSON
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebsocketEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for WebsocketEvent
             * @function getTypeUrl
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            WebsocketEvent.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ws.WebsocketEvent";
            };

            return WebsocketEvent;
        })();

        return ws;
    })();

    return pulsarity;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @typedef {Object} google.protobuf.Timestamp.$Properties
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @augments google.protobuf.Timestamp.$Properties
             * @deprecated Use google.protobuf.Timestamp.$Properties instead.
             */

            /**
             * Shape of a Timestamp.
             * @typedef {google.protobuf.Timestamp.$Properties} google.protobuf.Timestamp.$Shape
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @constructor
             * @param {google.protobuf.Timestamp.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             * @type {{
             *   (properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
             *   (properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;
             * }}
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.Timestamp(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.seconds = value;
                            else
                                delete message.seconds;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.nanos = value;
                            else
                                delete message.nanos;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if (typeof object.seconds === "object" ? object.seconds.low || object.seconds.high : Number(object.seconds) !== 0)
                        if ($util.Long)
                            message.seconds = $util.Long.fromValue(object.seconds, false);
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    if (Number(object.nanos) !== 0)
                        message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.seconds = typeof message.seconds === "number" ? BigInt(message.seconds) : $util.Long.fromBits(message.seconds.low >>> 0, message.seconds.high >>> 0, false).toBigInt();
                    else if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export {
  $root as default
};
