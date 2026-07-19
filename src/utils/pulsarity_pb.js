/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array, $Number = $util.global.Number, $isFinite = $util.global.isFinite, $Boolean = $util.global.Boolean, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt;

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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Attribute = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Attribute.create = function(properties) {
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
            Attribute.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Attribute.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Attribute.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Attribute(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Attribute.decodeDelimited = function(reader) {
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
            Attribute.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
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
            Attribute.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.Attribute)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.Attribute: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.Attribute();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = $String(object.name);
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
            Attribute.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
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
            Attribute.prototype.toJSON = function() {
                return Attribute.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Attribute
             * @function getTypeUrl
             * @memberof pulsarity.db.Attribute
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Attribute.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Pilot = function (properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Pilot.create = function(properties) {
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
            Pilot.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.displayCallsign != null && $Object.hasOwnProperty.call(message, "displayCallsign") && message.displayCallsign !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayCallsign);
                if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName") && message.displayName !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Pilot.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Pilot.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Pilot(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            if ((value = reader.stringVerify()).length)
                                message.displayCallsign = value;
                            else
                                delete message.displayCallsign;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
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
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Pilot.decodeDelimited = function(reader) {
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
            Pilot.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.displayCallsign != null && $Object.hasOwnProperty.call(message, "displayCallsign"))
                    if (!$util.isString(message.displayCallsign))
                        return "displayCallsign: string expected";
                if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
                    if (!$Array.isArray(message.attributes))
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
            Pilot.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.Pilot)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.Pilot: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.Pilot();
                if (object.id != null)
                    if ($Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.displayCallsign != null)
                    if (typeof object.displayCallsign !== "string" || object.displayCallsign.length)
                        message.displayCallsign = $String(object.displayCallsign);
                if (object.displayName != null)
                    if (typeof object.displayName !== "string" || object.displayName.length)
                        message.displayName = $String(object.displayName);
                if (object.attributes) {
                    if (!$Array.isArray(object.attributes))
                        throw $TypeError(".pulsarity.db.Pilot.attributes: array expected");
                    message.attributes = $Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (!$util.isObject(object.attributes[i]))
                            throw $TypeError(".pulsarity.db.Pilot.attributes: object expected");
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
            Pilot.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.displayCallsign = "";
                    object.displayName = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.displayCallsign != null && $Object.hasOwnProperty.call(message, "displayCallsign"))
                    object.displayCallsign = message.displayCallsign;
                if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                    object.displayName = message.displayName;
                if (message.attributes && message.attributes.length) {
                    object.attributes = $Array(message.attributes.length);
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
            Pilot.prototype.toJSON = function() {
                return Pilot.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Pilot
             * @function getTypeUrl
             * @memberof pulsarity.db.Pilot
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Pilot.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Pilots = function (properties) {
                this.pilots = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Pilots.create = function(properties) {
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
            Pilots.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.pilots != null && message.pilots.length)
                    for (let i = 0; i < message.pilots.length; ++i)
                        $root.pulsarity.db.Pilot.encode(message.pilots[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Pilots.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Pilots.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Pilots();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.pilots && message.pilots.length))
                                message.pilots = [];
                            message.pilots.push($root.pulsarity.db.Pilot.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Pilots.decodeDelimited = function(reader) {
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
            Pilots.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilots != null && $Object.hasOwnProperty.call(message, "pilots")) {
                    if (!$Array.isArray(message.pilots))
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
            Pilots.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.Pilots)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.Pilots: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.Pilots();
                if (object.pilots) {
                    if (!$Array.isArray(object.pilots))
                        throw $TypeError(".pulsarity.db.Pilots.pilots: array expected");
                    message.pilots = $Array(object.pilots.length);
                    for (let i = 0; i < object.pilots.length; ++i) {
                        if (!$util.isObject(object.pilots[i]))
                            throw $TypeError(".pulsarity.db.Pilots.pilots: object expected");
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
            Pilots.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.pilots = [];
                if (message.pilots && message.pilots.length) {
                    object.pilots = $Array(message.pilots.length);
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
            Pilots.prototype.toJSON = function() {
                return Pilots.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Pilots
             * @function getTypeUrl
             * @memberof pulsarity.db.Pilots
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Pilots.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const RaceEvent = function (properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            RaceEvent.create = function(properties) {
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
            RaceEvent.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.date != null && $Object.hasOwnProperty.call(message, "date"))
                    $root.google.protobuf.Timestamp.encode(message.date, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            RaceEvent.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            RaceEvent.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceEvent(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            if ((value = reader.stringVerify()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.date = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), $undefined, _depth + 1, message.date);
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.attributes && message.attributes.length))
                                message.attributes = [];
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            RaceEvent.decodeDelimited = function(reader) {
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
            RaceEvent.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.date != null && $Object.hasOwnProperty.call(message, "date")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.date, _depth + 1);
                    if (error)
                        return "date." + error;
                }
                if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
                    if (!$Array.isArray(message.attributes))
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
            RaceEvent.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceEvent)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.RaceEvent: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceEvent();
                if (object.id != null)
                    if ($Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = $String(object.name);
                if (object.date != null) {
                    if (!$util.isObject(object.date))
                        throw $TypeError(".pulsarity.db.RaceEvent.date: object expected");
                    message.date = $root.google.protobuf.Timestamp.fromObject(object.date, _depth + 1);
                }
                if (object.attributes) {
                    if (!$Array.isArray(object.attributes))
                        throw $TypeError(".pulsarity.db.RaceEvent.attributes: array expected");
                    message.attributes = $Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (!$util.isObject(object.attributes[i]))
                            throw $TypeError(".pulsarity.db.RaceEvent.attributes: object expected");
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
            RaceEvent.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.date = null;
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.date != null && $Object.hasOwnProperty.call(message, "date"))
                    object.date = $root.google.protobuf.Timestamp.toObject(message.date, options, _depth + 1);
                if (message.attributes && message.attributes.length) {
                    object.attributes = $Array(message.attributes.length);
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
            RaceEvent.prototype.toJSON = function() {
                return RaceEvent.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceEvent
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceEvent
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceEvent.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const RaceEvents = function (properties) {
                this.events = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            RaceEvents.create = function(properties) {
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
            RaceEvents.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.events != null && message.events.length)
                    for (let i = 0; i < message.events.length; ++i)
                        $root.pulsarity.db.RaceEvent.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            RaceEvents.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            RaceEvents.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceEvents();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.pulsarity.db.RaceEvent.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            RaceEvents.decodeDelimited = function(reader) {
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
            RaceEvents.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.events != null && $Object.hasOwnProperty.call(message, "events")) {
                    if (!$Array.isArray(message.events))
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
            RaceEvents.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceEvents)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.RaceEvents: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceEvents();
                if (object.events) {
                    if (!$Array.isArray(object.events))
                        throw $TypeError(".pulsarity.db.RaceEvents.events: array expected");
                    message.events = $Array(object.events.length);
                    for (let i = 0; i < object.events.length; ++i) {
                        if (!$util.isObject(object.events[i]))
                            throw $TypeError(".pulsarity.db.RaceEvents.events: object expected");
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
            RaceEvents.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (message.events && message.events.length) {
                    object.events = $Array(message.events.length);
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
            RaceEvents.prototype.toJSON = function() {
                return RaceEvents.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceEvents
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceEvents
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceEvents.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const RaceClass = function (properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            RaceClass.create = function(properties) {
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
            RaceClass.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            RaceClass.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            RaceClass.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceClass(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            if ((value = reader.stringVerify()).length)
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
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            RaceClass.decodeDelimited = function(reader) {
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
            RaceClass.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
                    if (!$Array.isArray(message.attributes))
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
            RaceClass.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceClass)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.RaceClass: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceClass();
                if (object.id != null)
                    if ($Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = $String(object.name);
                if (object.attributes) {
                    if (!$Array.isArray(object.attributes))
                        throw $TypeError(".pulsarity.db.RaceClass.attributes: array expected");
                    message.attributes = $Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (!$util.isObject(object.attributes[i]))
                            throw $TypeError(".pulsarity.db.RaceClass.attributes: object expected");
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
            RaceClass.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.attributes && message.attributes.length) {
                    object.attributes = $Array(message.attributes.length);
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
            RaceClass.prototype.toJSON = function() {
                return RaceClass.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceClass
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceClass
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceClass.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const RaceClasses = function (properties) {
                this.raceclasses = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            RaceClasses.create = function(properties) {
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
            RaceClasses.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.raceclasses != null && message.raceclasses.length)
                    for (let i = 0; i < message.raceclasses.length; ++i)
                        $root.pulsarity.db.RaceClass.encode(message.raceclasses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            RaceClasses.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            RaceClasses.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.RaceClasses();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.raceclasses && message.raceclasses.length))
                                message.raceclasses = [];
                            message.raceclasses.push($root.pulsarity.db.RaceClass.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            RaceClasses.decodeDelimited = function(reader) {
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
            RaceClasses.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.raceclasses != null && $Object.hasOwnProperty.call(message, "raceclasses")) {
                    if (!$Array.isArray(message.raceclasses))
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
            RaceClasses.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.RaceClasses)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.RaceClasses: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.RaceClasses();
                if (object.raceclasses) {
                    if (!$Array.isArray(object.raceclasses))
                        throw $TypeError(".pulsarity.db.RaceClasses.raceclasses: array expected");
                    message.raceclasses = $Array(object.raceclasses.length);
                    for (let i = 0; i < object.raceclasses.length; ++i) {
                        if (!$util.isObject(object.raceclasses[i]))
                            throw $TypeError(".pulsarity.db.RaceClasses.raceclasses: object expected");
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
            RaceClasses.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.raceclasses = [];
                if (message.raceclasses && message.raceclasses.length) {
                    object.raceclasses = $Array(message.raceclasses.length);
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
            RaceClasses.prototype.toJSON = function() {
                return RaceClasses.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RaceClasses
             * @function getTypeUrl
             * @memberof pulsarity.db.RaceClasses
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RaceClasses.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Round = function (properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Round.create = function(properties) {
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
            Round.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.roundNum != null && $Object.hasOwnProperty.call(message, "roundNum") && message.roundNum !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roundNum);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Round.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Round.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Round(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Round.decodeDelimited = function(reader) {
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
            Round.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.roundNum != null && $Object.hasOwnProperty.call(message, "roundNum"))
                    if (!$util.isInteger(message.roundNum))
                        return "roundNum: integer expected";
                if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
                    if (!$Array.isArray(message.attributes))
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
            Round.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.Round)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.Round: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.Round();
                if (object.id != null)
                    if ($Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.roundNum != null)
                    if ($Number(object.roundNum) !== 0)
                        message.roundNum = object.roundNum | 0;
                if (object.attributes) {
                    if (!$Array.isArray(object.attributes))
                        throw $TypeError(".pulsarity.db.Round.attributes: array expected");
                    message.attributes = $Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (!$util.isObject(object.attributes[i]))
                            throw $TypeError(".pulsarity.db.Round.attributes: object expected");
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
            Round.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.roundNum = 0;
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.roundNum != null && $Object.hasOwnProperty.call(message, "roundNum"))
                    object.roundNum = message.roundNum;
                if (message.attributes && message.attributes.length) {
                    object.attributes = $Array(message.attributes.length);
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
            Round.prototype.toJSON = function() {
                return Round.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Round
             * @function getTypeUrl
             * @memberof pulsarity.db.Round
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Round.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Rounds = function (properties) {
                this.rounds = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Rounds.create = function(properties) {
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
            Rounds.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.rounds != null && message.rounds.length)
                    for (let i = 0; i < message.rounds.length; ++i)
                        $root.pulsarity.db.Round.encode(message.rounds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Rounds.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Rounds.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Rounds();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.rounds && message.rounds.length))
                                message.rounds = [];
                            message.rounds.push($root.pulsarity.db.Round.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Rounds.decodeDelimited = function(reader) {
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
            Rounds.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.rounds != null && $Object.hasOwnProperty.call(message, "rounds")) {
                    if (!$Array.isArray(message.rounds))
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
            Rounds.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.Rounds)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.Rounds: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.Rounds();
                if (object.rounds) {
                    if (!$Array.isArray(object.rounds))
                        throw $TypeError(".pulsarity.db.Rounds.rounds: array expected");
                    message.rounds = $Array(object.rounds.length);
                    for (let i = 0; i < object.rounds.length; ++i) {
                        if (!$util.isObject(object.rounds[i]))
                            throw $TypeError(".pulsarity.db.Rounds.rounds: object expected");
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
            Rounds.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.rounds = [];
                if (message.rounds && message.rounds.length) {
                    object.rounds = $Array(message.rounds.length);
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
            Rounds.prototype.toJSON = function() {
                return Rounds.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Rounds
             * @function getTypeUrl
             * @memberof pulsarity.db.Rounds
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Rounds.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Heat = function (properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Heat.create = function(properties) {
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
            Heat.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.heatNum != null && $Object.hasOwnProperty.call(message, "heatNum") && message.heatNum !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heatNum);
                if (message.attributes != null && message.attributes.length)
                    for (let i = 0; i < message.attributes.length; ++i)
                        $root.pulsarity.db.Attribute.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Heat.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Heat.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Heat(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            message.attributes.push($root.pulsarity.db.Attribute.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Heat.decodeDelimited = function(reader) {
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
            Heat.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.heatNum != null && $Object.hasOwnProperty.call(message, "heatNum"))
                    if (!$util.isInteger(message.heatNum))
                        return "heatNum: integer expected";
                if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
                    if (!$Array.isArray(message.attributes))
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
            Heat.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.Heat)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.Heat: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.Heat();
                if (object.id != null)
                    if ($Number(object.id) !== 0)
                        message.id = object.id | 0;
                if (object.heatNum != null)
                    if ($Number(object.heatNum) !== 0)
                        message.heatNum = object.heatNum | 0;
                if (object.attributes) {
                    if (!$Array.isArray(object.attributes))
                        throw $TypeError(".pulsarity.db.Heat.attributes: array expected");
                    message.attributes = $Array(object.attributes.length);
                    for (let i = 0; i < object.attributes.length; ++i) {
                        if (!$util.isObject(object.attributes[i]))
                            throw $TypeError(".pulsarity.db.Heat.attributes: object expected");
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
            Heat.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults) {
                    object.id = 0;
                    object.heatNum = 0;
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.heatNum != null && $Object.hasOwnProperty.call(message, "heatNum"))
                    object.heatNum = message.heatNum;
                if (message.attributes && message.attributes.length) {
                    object.attributes = $Array(message.attributes.length);
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
            Heat.prototype.toJSON = function() {
                return Heat.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Heat
             * @function getTypeUrl
             * @memberof pulsarity.db.Heat
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Heat.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Heats = function (properties) {
                this.heats = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Heats.create = function(properties) {
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
            Heats.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.heats != null && message.heats.length)
                    for (let i = 0; i < message.heats.length; ++i)
                        $root.pulsarity.db.Heat.encode(message.heats[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Heats.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Heats.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.Heats();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.heats && message.heats.length))
                                message.heats = [];
                            message.heats.push($root.pulsarity.db.Heat.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Heats.decodeDelimited = function(reader) {
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
            Heats.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.heats != null && $Object.hasOwnProperty.call(message, "heats")) {
                    if (!$Array.isArray(message.heats))
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
            Heats.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.Heats)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.Heats: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.Heats();
                if (object.heats) {
                    if (!$Array.isArray(object.heats))
                        throw $TypeError(".pulsarity.db.Heats.heats: array expected");
                    message.heats = $Array(object.heats.length);
                    for (let i = 0; i < object.heats.length; ++i) {
                        if (!$util.isObject(object.heats[i]))
                            throw $TypeError(".pulsarity.db.Heats.heats: object expected");
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
            Heats.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.heats = [];
                if (message.heats && message.heats.length) {
                    object.heats = $Array(message.heats.length);
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
            Heats.prototype.toJSON = function() {
                return Heats.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Heats
             * @function getTypeUrl
             * @memberof pulsarity.db.Heats
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Heats.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SignalRecord = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            SignalRecord.create = function(properties) {
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
            SignalRecord.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.timedelta != null && $Object.hasOwnProperty.call(message, "timedelta") && !$Object.is(message.timedelta, 0))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.timedelta);
                if (message.value != null && $Object.hasOwnProperty.call(message, "value") && !$Object.is(message.value, 0))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.value);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            SignalRecord.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            SignalRecord.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.SignalRecord(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 5)
                                break;
                            if (!$Object.is(value = reader.float(), 0))
                                message.timedelta = value;
                            else
                                delete message.timedelta;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 5)
                                break;
                            if (!$Object.is(value = reader.float(), 0))
                                message.value = value;
                            else
                                delete message.value;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            SignalRecord.decodeDelimited = function(reader) {
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
            SignalRecord.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.timedelta != null && $Object.hasOwnProperty.call(message, "timedelta"))
                    if (typeof message.timedelta !== "number")
                        return "timedelta: number expected";
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
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
            SignalRecord.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.SignalRecord)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.SignalRecord: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.SignalRecord();
                if (object.timedelta != null)
                    if (!$Object.is($Number(object.timedelta), 0))
                        message.timedelta = $Number(object.timedelta);
                if (object.value != null)
                    if (!$Object.is($Number(object.value), 0))
                        message.value = $Number(object.value);
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
            SignalRecord.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.timedelta = 0;
                    object.value = 0;
                }
                if (message.timedelta != null && $Object.hasOwnProperty.call(message, "timedelta"))
                    object.timedelta = options.json && !$isFinite(message.timedelta) ? $String(message.timedelta) : message.timedelta;
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                    object.value = options.json && !$isFinite(message.value) ? $String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this SignalRecord to JSON.
             * @function toJSON
             * @memberof pulsarity.db.SignalRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalRecord.prototype.toJSON = function() {
                return SignalRecord.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SignalRecord
             * @function getTypeUrl
             * @memberof pulsarity.db.SignalRecord
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SignalRecord.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SignalHistory = function (properties) {
                this.records = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            SignalHistory.create = function(properties) {
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
            SignalHistory.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.records != null && message.records.length)
                    for (let i = 0; i < message.records.length; ++i)
                        $root.pulsarity.db.SignalRecord.encode(message.records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            SignalHistory.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            SignalHistory.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.db.SignalHistory();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.records && message.records.length))
                                message.records = [];
                            message.records.push($root.pulsarity.db.SignalRecord.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            SignalHistory.decodeDelimited = function(reader) {
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
            SignalHistory.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.records != null && $Object.hasOwnProperty.call(message, "records")) {
                    if (!$Array.isArray(message.records))
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
            SignalHistory.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.db.SignalHistory)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.db.SignalHistory: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.db.SignalHistory();
                if (object.records) {
                    if (!$Array.isArray(object.records))
                        throw $TypeError(".pulsarity.db.SignalHistory.records: array expected");
                    message.records = $Array(object.records.length);
                    for (let i = 0; i < object.records.length; ++i) {
                        if (!$util.isObject(object.records[i]))
                            throw $TypeError(".pulsarity.db.SignalHistory.records: object expected");
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
            SignalHistory.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.records = [];
                if (message.records && message.records.length) {
                    object.records = $Array(message.records.length);
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
            SignalHistory.prototype.toJSON = function() {
                return SignalHistory.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SignalHistory
             * @function getTypeUrl
             * @memberof pulsarity.db.SignalHistory
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SignalHistory.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UserInfo = function (properties) {
                this.permissions = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            UserInfo.create = function(properties) {
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
            UserInfo.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.authenticated != null && $Object.hasOwnProperty.call(message, "authenticated") && message.authenticated !== false)
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.authenticated);
                if (message.authId != null && $Object.hasOwnProperty.call(message, "authId") && message.authId !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.authId);
                if (message.username != null && $Object.hasOwnProperty.call(message, "username") && message.username !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
                if (message.dispayName != null && $Object.hasOwnProperty.call(message, "dispayName") && message.dispayName !== "")
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dispayName);
                if (message.permissions != null && message.permissions.length)
                    for (let i = 0; i < message.permissions.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.permissions[i]);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            UserInfo.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            UserInfo.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.UserInfo(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            if ((value = reader.stringVerify()).length)
                                message.authId = value;
                            else
                                delete message.authId;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.username = value;
                            else
                                delete message.username;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
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
                            message.permissions.push(reader.stringVerify());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            UserInfo.decodeDelimited = function(reader) {
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
            UserInfo.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.authenticated != null && $Object.hasOwnProperty.call(message, "authenticated"))
                    if (typeof message.authenticated !== "boolean")
                        return "authenticated: boolean expected";
                if (message.authId != null && $Object.hasOwnProperty.call(message, "authId"))
                    if (!$util.isString(message.authId))
                        return "authId: string expected";
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.dispayName != null && $Object.hasOwnProperty.call(message, "dispayName"))
                    if (!$util.isString(message.dispayName))
                        return "dispayName: string expected";
                if (message.permissions != null && $Object.hasOwnProperty.call(message, "permissions")) {
                    if (!$Array.isArray(message.permissions))
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
            UserInfo.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.http.UserInfo)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.http.UserInfo: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.http.UserInfo();
                if (object.authenticated != null)
                    if (object.authenticated)
                        message.authenticated = $Boolean(object.authenticated);
                if (object.authId != null)
                    if (typeof object.authId !== "string" || object.authId.length)
                        message.authId = $String(object.authId);
                if (object.username != null)
                    if (typeof object.username !== "string" || object.username.length)
                        message.username = $String(object.username);
                if (object.dispayName != null)
                    if (typeof object.dispayName !== "string" || object.dispayName.length)
                        message.dispayName = $String(object.dispayName);
                if (object.permissions) {
                    if (!$Array.isArray(object.permissions))
                        throw $TypeError(".pulsarity.http.UserInfo.permissions: array expected");
                    message.permissions = $Array(object.permissions.length);
                    for (let i = 0; i < object.permissions.length; ++i)
                        message.permissions[i] = $String(object.permissions[i]);
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
            UserInfo.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.permissions = [];
                if (options.defaults) {
                    object.authenticated = false;
                    object.authId = "";
                    object.username = "";
                    object.dispayName = "";
                }
                if (message.authenticated != null && $Object.hasOwnProperty.call(message, "authenticated"))
                    object.authenticated = message.authenticated;
                if (message.authId != null && $Object.hasOwnProperty.call(message, "authId"))
                    object.authId = message.authId;
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    object.username = message.username;
                if (message.dispayName != null && $Object.hasOwnProperty.call(message, "dispayName"))
                    object.dispayName = message.dispayName;
                if (message.permissions && message.permissions.length) {
                    object.permissions = $Array(message.permissions.length);
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
            UserInfo.prototype.toJSON = function() {
                return UserInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UserInfo
             * @function getTypeUrl
             * @memberof pulsarity.http.UserInfo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UserInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const AuthenticatedResponse = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            AuthenticatedResponse.create = function(properties) {
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
            AuthenticatedResponse.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== false)
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
                if (message.userinfo != null && $Object.hasOwnProperty.call(message, "userinfo"))
                    $root.pulsarity.http.UserInfo.encode(message.userinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            AuthenticatedResponse.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            AuthenticatedResponse.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.AuthenticatedResponse(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            message.userinfo = $root.pulsarity.http.UserInfo.decode(reader, reader.uint32(), $undefined, _depth + 1, message.userinfo);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            AuthenticatedResponse.decodeDelimited = function(reader) {
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
            AuthenticatedResponse.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    if (typeof message.status !== "boolean")
                        return "status: boolean expected";
                if (message.userinfo != null && $Object.hasOwnProperty.call(message, "userinfo")) {
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
            AuthenticatedResponse.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.http.AuthenticatedResponse)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.http.AuthenticatedResponse: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.http.AuthenticatedResponse();
                if (object.status != null)
                    if (object.status)
                        message.status = $Boolean(object.status);
                if (object.userinfo != null) {
                    if (!$util.isObject(object.userinfo))
                        throw $TypeError(".pulsarity.http.AuthenticatedResponse.userinfo: object expected");
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
            AuthenticatedResponse.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.status = false;
                    object.userinfo = null;
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.userinfo != null && $Object.hasOwnProperty.call(message, "userinfo"))
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
            AuthenticatedResponse.prototype.toJSON = function() {
                return AuthenticatedResponse.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AuthenticatedResponse
             * @function getTypeUrl
             * @memberof pulsarity.http.AuthenticatedResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AuthenticatedResponse.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const LoginRequest = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            LoginRequest.create = function(properties) {
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
            LoginRequest.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.username != null && $Object.hasOwnProperty.call(message, "username") && message.username !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && $Object.hasOwnProperty.call(message, "password") && message.password !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            LoginRequest.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            LoginRequest.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.LoginRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.username = value;
                            else
                                delete message.username;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.password = value;
                            else
                                delete message.password;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            LoginRequest.decodeDelimited = function(reader) {
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
            LoginRequest.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
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
            LoginRequest.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.http.LoginRequest)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.http.LoginRequest: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.http.LoginRequest();
                if (object.username != null)
                    if (typeof object.username !== "string" || object.username.length)
                        message.username = $String(object.username);
                if (object.password != null)
                    if (typeof object.password !== "string" || object.password.length)
                        message.password = $String(object.password);
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
            LoginRequest.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                }
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    object.username = message.username;
                if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
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
            LoginRequest.prototype.toJSON = function() {
                return LoginRequest.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for LoginRequest
             * @function getTypeUrl
             * @memberof pulsarity.http.LoginRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            LoginRequest.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const LoginResponse = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            LoginResponse.create = function(properties) {
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
            LoginResponse.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.passwordResetRequired != null && $Object.hasOwnProperty.call(message, "passwordResetRequired") && message.passwordResetRequired !== false)
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.passwordResetRequired);
                if (message.userinfo != null && $Object.hasOwnProperty.call(message, "userinfo"))
                    $root.pulsarity.http.UserInfo.encode(message.userinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            LoginResponse.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            LoginResponse.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.LoginResponse(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                            message.userinfo = $root.pulsarity.http.UserInfo.decode(reader, reader.uint32(), $undefined, _depth + 1, message.userinfo);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            LoginResponse.decodeDelimited = function(reader) {
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
            LoginResponse.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.passwordResetRequired != null && $Object.hasOwnProperty.call(message, "passwordResetRequired"))
                    if (typeof message.passwordResetRequired !== "boolean")
                        return "passwordResetRequired: boolean expected";
                if (message.userinfo != null && $Object.hasOwnProperty.call(message, "userinfo")) {
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
            LoginResponse.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.http.LoginResponse)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.http.LoginResponse: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.http.LoginResponse();
                if (object.passwordResetRequired != null)
                    if (object.passwordResetRequired)
                        message.passwordResetRequired = $Boolean(object.passwordResetRequired);
                if (object.userinfo != null) {
                    if (!$util.isObject(object.userinfo))
                        throw $TypeError(".pulsarity.http.LoginResponse.userinfo: object expected");
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
            LoginResponse.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.passwordResetRequired = false;
                    object.userinfo = null;
                }
                if (message.passwordResetRequired != null && $Object.hasOwnProperty.call(message, "passwordResetRequired"))
                    object.passwordResetRequired = message.passwordResetRequired;
                if (message.userinfo != null && $Object.hasOwnProperty.call(message, "userinfo"))
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
            LoginResponse.prototype.toJSON = function() {
                return LoginResponse.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for LoginResponse
             * @function getTypeUrl
             * @memberof pulsarity.http.LoginResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            LoginResponse.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ResetPasswordRequest = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            ResetPasswordRequest.create = function(properties) {
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
            ResetPasswordRequest.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.oldPassword != null && $Object.hasOwnProperty.call(message, "oldPassword") && message.oldPassword !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.oldPassword);
                if (message.newPassword != null && $Object.hasOwnProperty.call(message, "newPassword") && message.newPassword !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPassword);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            ResetPasswordRequest.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            ResetPasswordRequest.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.ResetPasswordRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.oldPassword = value;
                            else
                                delete message.oldPassword;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.newPassword = value;
                            else
                                delete message.newPassword;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            ResetPasswordRequest.decodeDelimited = function(reader) {
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
            ResetPasswordRequest.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.oldPassword != null && $Object.hasOwnProperty.call(message, "oldPassword"))
                    if (!$util.isString(message.oldPassword))
                        return "oldPassword: string expected";
                if (message.newPassword != null && $Object.hasOwnProperty.call(message, "newPassword"))
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
            ResetPasswordRequest.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.http.ResetPasswordRequest)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.http.ResetPasswordRequest: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.http.ResetPasswordRequest();
                if (object.oldPassword != null)
                    if (typeof object.oldPassword !== "string" || object.oldPassword.length)
                        message.oldPassword = $String(object.oldPassword);
                if (object.newPassword != null)
                    if (typeof object.newPassword !== "string" || object.newPassword.length)
                        message.newPassword = $String(object.newPassword);
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
            ResetPasswordRequest.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.oldPassword = "";
                    object.newPassword = "";
                }
                if (message.oldPassword != null && $Object.hasOwnProperty.call(message, "oldPassword"))
                    object.oldPassword = message.oldPassword;
                if (message.newPassword != null && $Object.hasOwnProperty.call(message, "newPassword"))
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
            ResetPasswordRequest.prototype.toJSON = function() {
                return ResetPasswordRequest.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ResetPasswordRequest
             * @function getTypeUrl
             * @memberof pulsarity.http.ResetPasswordRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ResetPasswordRequest.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {string|null} [languageVersion] ServerData languageVersion
             * @property {Array.<string>|null} [languagePacks] ServerData languagePacks
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ServerData = function (properties) {
                this.languagePacks = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
             * ServerData languageVersion.
             * @member {string} languageVersion
             * @memberof pulsarity.http.ServerData
             * @instance
             */
            ServerData.prototype.languageVersion = "";

            /**
             * ServerData languagePacks.
             * @member {Array.<string>} languagePacks
             * @memberof pulsarity.http.ServerData
             * @instance
             */
            ServerData.prototype.languagePacks = $util.emptyArray;

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
            ServerData.create = function(properties) {
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
            ServerData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.version != null && $Object.hasOwnProperty.call(message, "version") && message.version !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                if (message.serverName != null && $Object.hasOwnProperty.call(message, "serverName") && message.serverName !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverName);
                if (message.languageVersion != null && $Object.hasOwnProperty.call(message, "languageVersion") && message.languageVersion !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.languageVersion);
                if (message.languagePacks != null && message.languagePacks.length)
                    for (let i = 0; i < message.languagePacks.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.languagePacks[i]);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            ServerData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            ServerData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.ServerData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.version = value;
                            else
                                delete message.version;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.serverName = value;
                            else
                                delete message.serverName;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.languageVersion = value;
                            else
                                delete message.languageVersion;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.languagePacks && message.languagePacks.length))
                                message.languagePacks = [];
                            message.languagePacks.push(reader.stringVerify());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            ServerData.decodeDelimited = function(reader) {
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
            ServerData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.serverName != null && $Object.hasOwnProperty.call(message, "serverName"))
                    if (!$util.isString(message.serverName))
                        return "serverName: string expected";
                if (message.languageVersion != null && $Object.hasOwnProperty.call(message, "languageVersion"))
                    if (!$util.isString(message.languageVersion))
                        return "languageVersion: string expected";
                if (message.languagePacks != null && $Object.hasOwnProperty.call(message, "languagePacks")) {
                    if (!$Array.isArray(message.languagePacks))
                        return "languagePacks: array expected";
                    for (let i = 0; i < message.languagePacks.length; ++i)
                        if (!$util.isString(message.languagePacks[i]))
                            return "languagePacks: string[] expected";
                }
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
            ServerData.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.http.ServerData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.http.ServerData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.http.ServerData();
                if (object.version != null)
                    if (typeof object.version !== "string" || object.version.length)
                        message.version = $String(object.version);
                if (object.serverName != null)
                    if (typeof object.serverName !== "string" || object.serverName.length)
                        message.serverName = $String(object.serverName);
                if (object.languageVersion != null)
                    if (typeof object.languageVersion !== "string" || object.languageVersion.length)
                        message.languageVersion = $String(object.languageVersion);
                if (object.languagePacks) {
                    if (!$Array.isArray(object.languagePacks))
                        throw $TypeError(".pulsarity.http.ServerData.languagePacks: array expected");
                    message.languagePacks = $Array(object.languagePacks.length);
                    for (let i = 0; i < object.languagePacks.length; ++i)
                        message.languagePacks[i] = $String(object.languagePacks[i]);
                }
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
            ServerData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.languagePacks = [];
                if (options.defaults) {
                    object.version = "";
                    object.serverName = "";
                    object.languageVersion = "";
                }
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    object.version = message.version;
                if (message.serverName != null && $Object.hasOwnProperty.call(message, "serverName"))
                    object.serverName = message.serverName;
                if (message.languageVersion != null && $Object.hasOwnProperty.call(message, "languageVersion"))
                    object.languageVersion = message.languageVersion;
                if (message.languagePacks && message.languagePacks.length) {
                    object.languagePacks = $Array(message.languagePacks.length);
                    for (let j = 0; j < message.languagePacks.length; ++j)
                        object.languagePacks[j] = message.languagePacks[j];
                }
                return object;
            };

            /**
             * Converts this ServerData to JSON.
             * @function toJSON
             * @memberof pulsarity.http.ServerData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServerData.prototype.toJSON = function() {
                return ServerData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ServerData
             * @function getTypeUrl
             * @memberof pulsarity.http.ServerData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ServerData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.ServerData";
            };

            return ServerData;
        })();

        http.LocalizationData = (function() {

            /**
             * Properties of a LocalizationData.
             * @typedef {Object} pulsarity.http.LocalizationData.$Properties
             * @property {Object.<string,string>|null} [messages] LocalizationData messages
             * @property {Object.<string,string>|null} [pluralization] LocalizationData pluralization
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a LocalizationData.
             * @memberof pulsarity.http
             * @interface ILocalizationData
             * @augments pulsarity.http.LocalizationData.$Properties
             * @deprecated Use pulsarity.http.LocalizationData.$Properties instead.
             */

            /**
             * Shape of a LocalizationData.
             * @typedef {pulsarity.http.LocalizationData.$Properties} pulsarity.http.LocalizationData.$Shape
             */

            /**
             * Constructs a new LocalizationData.
             * @memberof pulsarity.http
             * @classdesc Represents a LocalizationData.
             * @constructor
             * @param {pulsarity.http.LocalizationData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const LocalizationData = function (properties) {
                this.messages = {};
                this.pluralization = {};
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * LocalizationData messages.
             * @member {Object.<string,string>} messages
             * @memberof pulsarity.http.LocalizationData
             * @instance
             */
            LocalizationData.prototype.messages = $util.emptyObject;

            /**
             * LocalizationData pluralization.
             * @member {Object.<string,string>} pluralization
             * @memberof pulsarity.http.LocalizationData
             * @instance
             */
            LocalizationData.prototype.pluralization = $util.emptyObject;

            /**
             * Creates a new LocalizationData instance using the specified properties.
             * @function create
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {pulsarity.http.LocalizationData.$Properties=} [properties] Properties to set
             * @returns {pulsarity.http.LocalizationData} LocalizationData instance
             * @type {{
             *   (properties: pulsarity.http.LocalizationData.$Shape): pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape;
             *   (properties?: pulsarity.http.LocalizationData.$Properties): pulsarity.http.LocalizationData;
             * }}
             */
            LocalizationData.create = function(properties) {
                return new LocalizationData(properties);
            };

            /**
             * Encodes the specified LocalizationData message. Does not implicitly {@link pulsarity.http.LocalizationData.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {pulsarity.http.LocalizationData.$Properties} message LocalizationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LocalizationData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.messages != null && $Object.hasOwnProperty.call(message, "messages"))
                    for (let keys = $Object.keys(message.messages), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.messages[keys[i]]).ldelim();
                if (message.pluralization != null && $Object.hasOwnProperty.call(message, "pluralization"))
                    for (let keys = $Object.keys(message.pluralization), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.pluralization[keys[i]]).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified LocalizationData message, length delimited. Does not implicitly {@link pulsarity.http.LocalizationData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {pulsarity.http.LocalizationData.$Properties} message LocalizationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LocalizationData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a LocalizationData message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape} LocalizationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LocalizationData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.http.LocalizationData(), key, value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (message.messages === $util.emptyObject)
                                message.messages = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = reader.stringVerify();
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (key === "__proto__")
                                $util.makeProp(message.messages, key);
                            message.messages[key] = value;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (message.pluralization === $util.emptyObject)
                                message.pluralization = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = reader.stringVerify();
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (key === "__proto__")
                                $util.makeProp(message.pluralization, key);
                            message.pluralization[key] = value;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a LocalizationData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape} LocalizationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LocalizationData.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LocalizationData message.
             * @function verify
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LocalizationData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.messages != null && $Object.hasOwnProperty.call(message, "messages")) {
                    if (!$util.isObject(message.messages))
                        return "messages: object expected";
                    let key = $Object.keys(message.messages);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.messages[key[i]]))
                            return "messages: string{k:string} expected";
                }
                if (message.pluralization != null && $Object.hasOwnProperty.call(message, "pluralization")) {
                    if (!$util.isObject(message.pluralization))
                        return "pluralization: object expected";
                    let key = $Object.keys(message.pluralization);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.pluralization[key[i]]))
                            return "pluralization: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a LocalizationData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.http.LocalizationData} LocalizationData
             */
            LocalizationData.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.http.LocalizationData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.http.LocalizationData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.http.LocalizationData();
                if (object.messages) {
                    if (!$util.isObject(object.messages))
                        throw $TypeError(".pulsarity.http.LocalizationData.messages: object expected");
                    message.messages = {};
                    for (let keys = $Object.keys(object.messages), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.messages, keys[i]);
                        message.messages[keys[i]] = $String(object.messages[keys[i]]);
                    }
                }
                if (object.pluralization) {
                    if (!$util.isObject(object.pluralization))
                        throw $TypeError(".pulsarity.http.LocalizationData.pluralization: object expected");
                    message.pluralization = {};
                    for (let keys = $Object.keys(object.pluralization), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.pluralization, keys[i]);
                        message.pluralization[keys[i]] = $String(object.pluralization[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a LocalizationData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {pulsarity.http.LocalizationData} message LocalizationData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LocalizationData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.objects || options.defaults) {
                    object.messages = {};
                    object.pluralization = {};
                }
                let keys2;
                if (message.messages && (keys2 = $Object.keys(message.messages)).length) {
                    object.messages = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.messages, keys2[j]);
                        object.messages[keys2[j]] = message.messages[keys2[j]];
                    }
                }
                if (message.pluralization && (keys2 = $Object.keys(message.pluralization)).length) {
                    object.pluralization = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.pluralization, keys2[j]);
                        object.pluralization[keys2[j]] = message.pluralization[keys2[j]];
                    }
                }
                return object;
            };

            /**
             * Converts this LocalizationData to JSON.
             * @function toJSON
             * @memberof pulsarity.http.LocalizationData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LocalizationData.prototype.toJSON = function() {
                return LocalizationData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for LocalizationData
             * @function getTypeUrl
             * @memberof pulsarity.http.LocalizationData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            LocalizationData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.http.LocalizationData";
            };

            return LocalizationData;
        })();

        return http;
    })();

    pulsarity.ui = (function() {

        /**
         * Namespace ui.
         * @memberof pulsarity
         * @namespace
         */
        const ui = {};

        /**
         * UIElementType enum.
         * @name pulsarity.ui.UIElementType
         * @enum {number}
         * @property {number} ELEMENT_TYPE_UNKNOWN=0 ELEMENT_TYPE_UNKNOWN value
         * @property {number} ELEMENT_TYPE_ETREE=1 ELEMENT_TYPE_ETREE value
         * @property {number} ELEMENT_TYPE_MARKDOWN=2 ELEMENT_TYPE_MARKDOWN value
         * @property {number} ELEMENT_TYPE_BUTTON=3 ELEMENT_TYPE_BUTTON value
         * @property {number} ELEMENT_TYPE_VALUE=4 ELEMENT_TYPE_VALUE value
         */
        ui.UIElementType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "ELEMENT_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "ELEMENT_TYPE_ETREE"] = 1;
            values[valuesById[2] = "ELEMENT_TYPE_MARKDOWN"] = 2;
            values[valuesById[3] = "ELEMENT_TYPE_BUTTON"] = 3;
            values[valuesById[4] = "ELEMENT_TYPE_VALUE"] = 4;
            return values;
        })();

        ui.UIElementTreeEntry = (function() {

            /**
             * Properties of a UIElementTreeEntry.
             * @typedef {Object} pulsarity.ui.UIElementTreeEntry.$Properties
             * @property {pulsarity.ui.UIElementType|null} [type] UIElementTreeEntry type
             * @property {number|null} [elementId] UIElementTreeEntry elementId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIElementTreeEntry.
             * @memberof pulsarity.ui
             * @interface IUIElementTreeEntry
             * @augments pulsarity.ui.UIElementTreeEntry.$Properties
             * @deprecated Use pulsarity.ui.UIElementTreeEntry.$Properties instead.
             */

            /**
             * Shape of a UIElementTreeEntry.
             * @typedef {pulsarity.ui.UIElementTreeEntry.$Properties} pulsarity.ui.UIElementTreeEntry.$Shape
             */

            /**
             * Constructs a new UIElementTreeEntry.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIElementTreeEntry.
             * @constructor
             * @param {pulsarity.ui.UIElementTreeEntry.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIElementTreeEntry = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIElementTreeEntry type.
             * @member {pulsarity.ui.UIElementType} type
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @instance
             */
            UIElementTreeEntry.prototype.type = 0;

            /**
             * UIElementTreeEntry elementId.
             * @member {number} elementId
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @instance
             */
            UIElementTreeEntry.prototype.elementId = 0;

            /**
             * Creates a new UIElementTreeEntry instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {pulsarity.ui.UIElementTreeEntry.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIElementTreeEntry} UIElementTreeEntry instance
             * @type {{
             *   (properties: pulsarity.ui.UIElementTreeEntry.$Shape): pulsarity.ui.UIElementTreeEntry & pulsarity.ui.UIElementTreeEntry.$Shape;
             *   (properties?: pulsarity.ui.UIElementTreeEntry.$Properties): pulsarity.ui.UIElementTreeEntry;
             * }}
             */
            UIElementTreeEntry.create = function(properties) {
                return new UIElementTreeEntry(properties);
            };

            /**
             * Encodes the specified UIElementTreeEntry message. Does not implicitly {@link pulsarity.ui.UIElementTreeEntry.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {pulsarity.ui.UIElementTreeEntry.$Properties} message UIElementTreeEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementTreeEntry.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId") && message.elementId !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.elementId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIElementTreeEntry message, length delimited. Does not implicitly {@link pulsarity.ui.UIElementTreeEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {pulsarity.ui.UIElementTreeEntry.$Properties} message UIElementTreeEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementTreeEntry.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIElementTreeEntry message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIElementTreeEntry & pulsarity.ui.UIElementTreeEntry.$Shape} UIElementTreeEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementTreeEntry.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIElementTreeEntry(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.type = value;
                            else
                                delete message.type;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.elementId = value;
                            else
                                delete message.elementId;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIElementTreeEntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIElementTreeEntry & pulsarity.ui.UIElementTreeEntry.$Shape} UIElementTreeEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementTreeEntry.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIElementTreeEntry message.
             * @function verify
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIElementTreeEntry.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                        return "type: enum value expected";
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    if (!$util.isInteger(message.elementId))
                        return "elementId: integer expected";
                return null;
            };

            /**
             * Creates a UIElementTreeEntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIElementTreeEntry} UIElementTreeEntry
             */
            UIElementTreeEntry.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIElementTreeEntry)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIElementTreeEntry: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIElementTreeEntry();
                if (object.type !== 0 && (typeof object.type !== "string" || $root.pulsarity.ui.UIElementType[object.type] !== 0))
                    switch (object.type) {
                    case "ELEMENT_TYPE_UNKNOWN":
                    case 0:
                        message.type = 0;
                        break;
                    case "ELEMENT_TYPE_ETREE":
                    case 1:
                        message.type = 1;
                        break;
                    case "ELEMENT_TYPE_MARKDOWN":
                    case 2:
                        message.type = 2;
                        break;
                    case "ELEMENT_TYPE_BUTTON":
                    case 3:
                        message.type = 3;
                        break;
                    case "ELEMENT_TYPE_VALUE":
                    case 4:
                        message.type = 4;
                        break;
                    default:
                        if (typeof object.type === "number" && (object.type | 0) === object.type)
                            message.type = object.type;
                    }
                if (object.elementId != null)
                    if ($Number(object.elementId) !== 0)
                        message.elementId = object.elementId | 0;
                return message;
            };

            /**
             * Creates a plain object from a UIElementTreeEntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {pulsarity.ui.UIElementTreeEntry} message UIElementTreeEntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIElementTreeEntry.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.type = options.enums === $String ? "ELEMENT_TYPE_UNKNOWN" : 0;
                    object.elementId = 0;
                }
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    object.type = options.enums === $String ? $root.pulsarity.ui.UIElementType[message.type] === $undefined ? message.type : $root.pulsarity.ui.UIElementType[message.type] : message.type;
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    object.elementId = message.elementId;
                return object;
            };

            /**
             * Converts this UIElementTreeEntry to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIElementTreeEntry.prototype.toJSON = function() {
                return UIElementTreeEntry.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIElementTreeEntry
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIElementTreeEntry
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIElementTreeEntry.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIElementTreeEntry";
            };

            return UIElementTreeEntry;
        })();

        ui.UIElementTree = (function() {

            /**
             * Properties of a UIElementTree.
             * @typedef {Object} pulsarity.ui.UIElementTree.$Properties
             * @property {number|null} [elementId] UIElementTree elementId
             * @property {Array.<pulsarity.ui.UIElementTreeEntry.$Properties>|null} [elements] UIElementTree elements
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIElementTree.
             * @memberof pulsarity.ui
             * @interface IUIElementTree
             * @augments pulsarity.ui.UIElementTree.$Properties
             * @deprecated Use pulsarity.ui.UIElementTree.$Properties instead.
             */

            /**
             * Shape of a UIElementTree.
             * @typedef {pulsarity.ui.UIElementTree.$Properties} pulsarity.ui.UIElementTree.$Shape
             */

            /**
             * Constructs a new UIElementTree.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIElementTree.
             * @constructor
             * @param {pulsarity.ui.UIElementTree.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIElementTree = function (properties) {
                this.elements = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIElementTree elementId.
             * @member {number} elementId
             * @memberof pulsarity.ui.UIElementTree
             * @instance
             */
            UIElementTree.prototype.elementId = 0;

            /**
             * UIElementTree elements.
             * @member {Array.<pulsarity.ui.UIElementTreeEntry.$Properties>} elements
             * @memberof pulsarity.ui.UIElementTree
             * @instance
             */
            UIElementTree.prototype.elements = $util.emptyArray;

            /**
             * Creates a new UIElementTree instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {pulsarity.ui.UIElementTree.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIElementTree} UIElementTree instance
             * @type {{
             *   (properties: pulsarity.ui.UIElementTree.$Shape): pulsarity.ui.UIElementTree & pulsarity.ui.UIElementTree.$Shape;
             *   (properties?: pulsarity.ui.UIElementTree.$Properties): pulsarity.ui.UIElementTree;
             * }}
             */
            UIElementTree.create = function(properties) {
                return new UIElementTree(properties);
            };

            /**
             * Encodes the specified UIElementTree message. Does not implicitly {@link pulsarity.ui.UIElementTree.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {pulsarity.ui.UIElementTree.$Properties} message UIElementTree message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementTree.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId") && message.elementId !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elementId);
                if (message.elements != null && message.elements.length)
                    for (let i = 0; i < message.elements.length; ++i)
                        $root.pulsarity.ui.UIElementTreeEntry.encode(message.elements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIElementTree message, length delimited. Does not implicitly {@link pulsarity.ui.UIElementTree.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {pulsarity.ui.UIElementTree.$Properties} message UIElementTree message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementTree.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIElementTree message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIElementTree & pulsarity.ui.UIElementTree.$Shape} UIElementTree
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementTree.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIElementTree(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.elementId = value;
                            else
                                delete message.elementId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.elements && message.elements.length))
                                message.elements = [];
                            message.elements.push($root.pulsarity.ui.UIElementTreeEntry.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIElementTree message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIElementTree & pulsarity.ui.UIElementTree.$Shape} UIElementTree
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementTree.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIElementTree message.
             * @function verify
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIElementTree.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    if (!$util.isInteger(message.elementId))
                        return "elementId: integer expected";
                if (message.elements != null && $Object.hasOwnProperty.call(message, "elements")) {
                    if (!$Array.isArray(message.elements))
                        return "elements: array expected";
                    for (let i = 0; i < message.elements.length; ++i) {
                        let error = $root.pulsarity.ui.UIElementTreeEntry.verify(message.elements[i], _depth + 1);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UIElementTree message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIElementTree} UIElementTree
             */
            UIElementTree.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIElementTree)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIElementTree: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIElementTree();
                if (object.elementId != null)
                    if ($Number(object.elementId) !== 0)
                        message.elementId = object.elementId | 0;
                if (object.elements) {
                    if (!$Array.isArray(object.elements))
                        throw $TypeError(".pulsarity.ui.UIElementTree.elements: array expected");
                    message.elements = $Array(object.elements.length);
                    for (let i = 0; i < object.elements.length; ++i) {
                        if (!$util.isObject(object.elements[i]))
                            throw $TypeError(".pulsarity.ui.UIElementTree.elements: object expected");
                        message.elements[i] = $root.pulsarity.ui.UIElementTreeEntry.fromObject(object.elements[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UIElementTree message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {pulsarity.ui.UIElementTree} message UIElementTree
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIElementTree.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (options.defaults)
                    object.elementId = 0;
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    object.elementId = message.elementId;
                if (message.elements && message.elements.length) {
                    object.elements = $Array(message.elements.length);
                    for (let j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.pulsarity.ui.UIElementTreeEntry.toObject(message.elements[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this UIElementTree to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIElementTree
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIElementTree.prototype.toJSON = function() {
                return UIElementTree.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIElementTree
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIElementTree
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIElementTree.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIElementTree";
            };

            return UIElementTree;
        })();

        ui.UIElementTrees = (function() {

            /**
             * Properties of a UIElementTrees.
             * @typedef {Object} pulsarity.ui.UIElementTrees.$Properties
             * @property {Array.<pulsarity.ui.UIElementTree.$Properties>|null} [etrees] UIElementTrees etrees
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIElementTrees.
             * @memberof pulsarity.ui
             * @interface IUIElementTrees
             * @augments pulsarity.ui.UIElementTrees.$Properties
             * @deprecated Use pulsarity.ui.UIElementTrees.$Properties instead.
             */

            /**
             * Shape of a UIElementTrees.
             * @typedef {pulsarity.ui.UIElementTrees.$Properties} pulsarity.ui.UIElementTrees.$Shape
             */

            /**
             * Constructs a new UIElementTrees.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIElementTrees.
             * @constructor
             * @param {pulsarity.ui.UIElementTrees.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIElementTrees = function (properties) {
                this.etrees = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIElementTrees etrees.
             * @member {Array.<pulsarity.ui.UIElementTree.$Properties>} etrees
             * @memberof pulsarity.ui.UIElementTrees
             * @instance
             */
            UIElementTrees.prototype.etrees = $util.emptyArray;

            /**
             * Creates a new UIElementTrees instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {pulsarity.ui.UIElementTrees.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIElementTrees} UIElementTrees instance
             * @type {{
             *   (properties: pulsarity.ui.UIElementTrees.$Shape): pulsarity.ui.UIElementTrees & pulsarity.ui.UIElementTrees.$Shape;
             *   (properties?: pulsarity.ui.UIElementTrees.$Properties): pulsarity.ui.UIElementTrees;
             * }}
             */
            UIElementTrees.create = function(properties) {
                return new UIElementTrees(properties);
            };

            /**
             * Encodes the specified UIElementTrees message. Does not implicitly {@link pulsarity.ui.UIElementTrees.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {pulsarity.ui.UIElementTrees.$Properties} message UIElementTrees message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementTrees.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.etrees != null && message.etrees.length)
                    for (let i = 0; i < message.etrees.length; ++i)
                        $root.pulsarity.ui.UIElementTree.encode(message.etrees[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIElementTrees message, length delimited. Does not implicitly {@link pulsarity.ui.UIElementTrees.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {pulsarity.ui.UIElementTrees.$Properties} message UIElementTrees message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementTrees.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIElementTrees message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIElementTrees & pulsarity.ui.UIElementTrees.$Shape} UIElementTrees
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementTrees.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIElementTrees();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.etrees && message.etrees.length))
                                message.etrees = [];
                            message.etrees.push($root.pulsarity.ui.UIElementTree.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIElementTrees message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIElementTrees & pulsarity.ui.UIElementTrees.$Shape} UIElementTrees
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementTrees.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIElementTrees message.
             * @function verify
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIElementTrees.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.etrees != null && $Object.hasOwnProperty.call(message, "etrees")) {
                    if (!$Array.isArray(message.etrees))
                        return "etrees: array expected";
                    for (let i = 0; i < message.etrees.length; ++i) {
                        let error = $root.pulsarity.ui.UIElementTree.verify(message.etrees[i], _depth + 1);
                        if (error)
                            return "etrees." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UIElementTrees message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIElementTrees} UIElementTrees
             */
            UIElementTrees.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIElementTrees)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIElementTrees: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIElementTrees();
                if (object.etrees) {
                    if (!$Array.isArray(object.etrees))
                        throw $TypeError(".pulsarity.ui.UIElementTrees.etrees: array expected");
                    message.etrees = $Array(object.etrees.length);
                    for (let i = 0; i < object.etrees.length; ++i) {
                        if (!$util.isObject(object.etrees[i]))
                            throw $TypeError(".pulsarity.ui.UIElementTrees.etrees: object expected");
                        message.etrees[i] = $root.pulsarity.ui.UIElementTree.fromObject(object.etrees[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UIElementTrees message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {pulsarity.ui.UIElementTrees} message UIElementTrees
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIElementTrees.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.etrees = [];
                if (message.etrees && message.etrees.length) {
                    object.etrees = $Array(message.etrees.length);
                    for (let j = 0; j < message.etrees.length; ++j)
                        object.etrees[j] = $root.pulsarity.ui.UIElementTree.toObject(message.etrees[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this UIElementTrees to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIElementTrees
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIElementTrees.prototype.toJSON = function() {
                return UIElementTrees.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIElementTrees
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIElementTrees
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIElementTrees.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIElementTrees";
            };

            return UIElementTrees;
        })();

        ui.MappedElementTrees = (function() {

            /**
             * Properties of a MappedElementTrees.
             * @typedef {Object} pulsarity.ui.MappedElementTrees.$Properties
             * @property {Array.<number>|null} [elementIds] MappedElementTrees elementIds
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a MappedElementTrees.
             * @memberof pulsarity.ui
             * @interface IMappedElementTrees
             * @augments pulsarity.ui.MappedElementTrees.$Properties
             * @deprecated Use pulsarity.ui.MappedElementTrees.$Properties instead.
             */

            /**
             * Shape of a MappedElementTrees.
             * @typedef {pulsarity.ui.MappedElementTrees.$Properties} pulsarity.ui.MappedElementTrees.$Shape
             */

            /**
             * Constructs a new MappedElementTrees.
             * @memberof pulsarity.ui
             * @classdesc Represents a MappedElementTrees.
             * @constructor
             * @param {pulsarity.ui.MappedElementTrees.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const MappedElementTrees = function (properties) {
                this.elementIds = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * MappedElementTrees elementIds.
             * @member {Array.<number>} elementIds
             * @memberof pulsarity.ui.MappedElementTrees
             * @instance
             */
            MappedElementTrees.prototype.elementIds = $util.emptyArray;

            /**
             * Creates a new MappedElementTrees instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {pulsarity.ui.MappedElementTrees.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.MappedElementTrees} MappedElementTrees instance
             * @type {{
             *   (properties: pulsarity.ui.MappedElementTrees.$Shape): pulsarity.ui.MappedElementTrees & pulsarity.ui.MappedElementTrees.$Shape;
             *   (properties?: pulsarity.ui.MappedElementTrees.$Properties): pulsarity.ui.MappedElementTrees;
             * }}
             */
            MappedElementTrees.create = function(properties) {
                return new MappedElementTrees(properties);
            };

            /**
             * Encodes the specified MappedElementTrees message. Does not implicitly {@link pulsarity.ui.MappedElementTrees.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {pulsarity.ui.MappedElementTrees.$Properties} message MappedElementTrees message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MappedElementTrees.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.elementIds != null && message.elementIds.length)
                    writer.uint32(/* id 1, wireType 2 =*/10).int32s(message.elementIds);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MappedElementTrees message, length delimited. Does not implicitly {@link pulsarity.ui.MappedElementTrees.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {pulsarity.ui.MappedElementTrees.$Properties} message MappedElementTrees message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MappedElementTrees.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a MappedElementTrees message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.MappedElementTrees & pulsarity.ui.MappedElementTrees.$Shape} MappedElementTrees
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MappedElementTrees.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.MappedElementTrees();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType === 2) {
                                if (!(message.elementIds && message.elementIds.length))
                                    message.elementIds = [];
                                reader.int32s(message.elementIds);
                                continue;
                            }
                            if (wireType !== 0)
                                break;
                            if (!(message.elementIds && message.elementIds.length))
                                message.elementIds = [];
                            message.elementIds.push(reader.int32());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a MappedElementTrees message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.MappedElementTrees & pulsarity.ui.MappedElementTrees.$Shape} MappedElementTrees
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MappedElementTrees.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MappedElementTrees message.
             * @function verify
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MappedElementTrees.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.elementIds != null && $Object.hasOwnProperty.call(message, "elementIds")) {
                    if (!$Array.isArray(message.elementIds))
                        return "elementIds: array expected";
                    for (let i = 0; i < message.elementIds.length; ++i)
                        if (!$util.isInteger(message.elementIds[i]))
                            return "elementIds: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a MappedElementTrees message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.MappedElementTrees} MappedElementTrees
             */
            MappedElementTrees.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.MappedElementTrees)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.MappedElementTrees: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.MappedElementTrees();
                if (object.elementIds) {
                    if (!$Array.isArray(object.elementIds))
                        throw $TypeError(".pulsarity.ui.MappedElementTrees.elementIds: array expected");
                    message.elementIds = $Array(object.elementIds.length);
                    for (let i = 0; i < object.elementIds.length; ++i)
                        message.elementIds[i] = object.elementIds[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a MappedElementTrees message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {pulsarity.ui.MappedElementTrees} message MappedElementTrees
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MappedElementTrees.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.elementIds = [];
                if (message.elementIds && message.elementIds.length) {
                    object.elementIds = $Array(message.elementIds.length);
                    for (let j = 0; j < message.elementIds.length; ++j)
                        object.elementIds[j] = message.elementIds[j];
                }
                return object;
            };

            /**
             * Converts this MappedElementTrees to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.MappedElementTrees
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MappedElementTrees.prototype.toJSON = function() {
                return MappedElementTrees.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MappedElementTrees
             * @function getTypeUrl
             * @memberof pulsarity.ui.MappedElementTrees
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MappedElementTrees.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.MappedElementTrees";
            };

            return MappedElementTrees;
        })();

        ui.UIETreeMapping = (function() {

            /**
             * Properties of a UIETreeMapping.
             * @typedef {Object} pulsarity.ui.UIETreeMapping.$Properties
             * @property {Object.<string,pulsarity.ui.MappedElementTrees.$Properties>|null} [mapping] UIETreeMapping mapping
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIETreeMapping.
             * @memberof pulsarity.ui
             * @interface IUIETreeMapping
             * @augments pulsarity.ui.UIETreeMapping.$Properties
             * @deprecated Use pulsarity.ui.UIETreeMapping.$Properties instead.
             */

            /**
             * Shape of a UIETreeMapping.
             * @typedef {pulsarity.ui.UIETreeMapping.$Properties} pulsarity.ui.UIETreeMapping.$Shape
             */

            /**
             * Constructs a new UIETreeMapping.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIETreeMapping.
             * @constructor
             * @param {pulsarity.ui.UIETreeMapping.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIETreeMapping = function (properties) {
                this.mapping = {};
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIETreeMapping mapping.
             * @member {Object.<string,pulsarity.ui.MappedElementTrees.$Properties>} mapping
             * @memberof pulsarity.ui.UIETreeMapping
             * @instance
             */
            UIETreeMapping.prototype.mapping = $util.emptyObject;

            /**
             * Creates a new UIETreeMapping instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {pulsarity.ui.UIETreeMapping.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIETreeMapping} UIETreeMapping instance
             * @type {{
             *   (properties: pulsarity.ui.UIETreeMapping.$Shape): pulsarity.ui.UIETreeMapping & pulsarity.ui.UIETreeMapping.$Shape;
             *   (properties?: pulsarity.ui.UIETreeMapping.$Properties): pulsarity.ui.UIETreeMapping;
             * }}
             */
            UIETreeMapping.create = function(properties) {
                return new UIETreeMapping(properties);
            };

            /**
             * Encodes the specified UIETreeMapping message. Does not implicitly {@link pulsarity.ui.UIETreeMapping.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {pulsarity.ui.UIETreeMapping.$Properties} message UIETreeMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIETreeMapping.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.mapping != null && $Object.hasOwnProperty.call(message, "mapping"))
                    for (let keys = $Object.keys(message.mapping), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.pulsarity.ui.MappedElementTrees.encode(message.mapping[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                    }
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIETreeMapping message, length delimited. Does not implicitly {@link pulsarity.ui.UIETreeMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {pulsarity.ui.UIETreeMapping.$Properties} message UIETreeMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIETreeMapping.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIETreeMapping message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIETreeMapping & pulsarity.ui.UIETreeMapping.$Shape} UIETreeMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIETreeMapping.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIETreeMapping(), key, value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (message.mapping === $util.emptyObject)
                                message.mapping = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = $root.pulsarity.ui.MappedElementTrees.decode(reader, reader.uint32(), $undefined, _depth + 1);
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (key === "__proto__")
                                $util.makeProp(message.mapping, key);
                            message.mapping[key] = value || new $root.pulsarity.ui.MappedElementTrees();
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIETreeMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIETreeMapping & pulsarity.ui.UIETreeMapping.$Shape} UIETreeMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIETreeMapping.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIETreeMapping message.
             * @function verify
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIETreeMapping.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.mapping != null && $Object.hasOwnProperty.call(message, "mapping")) {
                    if (!$util.isObject(message.mapping))
                        return "mapping: object expected";
                    let key = $Object.keys(message.mapping);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.pulsarity.ui.MappedElementTrees.verify(message.mapping[key[i]], _depth + 1);
                        if (error)
                            return "mapping." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UIETreeMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIETreeMapping} UIETreeMapping
             */
            UIETreeMapping.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIETreeMapping)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIETreeMapping: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIETreeMapping();
                if (object.mapping) {
                    if (!$util.isObject(object.mapping))
                        throw $TypeError(".pulsarity.ui.UIETreeMapping.mapping: object expected");
                    message.mapping = {};
                    for (let keys = $Object.keys(object.mapping), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.mapping, keys[i]);
                        if (!$util.isObject(object.mapping[keys[i]]))
                            throw $TypeError(".pulsarity.ui.UIETreeMapping.mapping: object expected");
                        message.mapping[keys[i]] = $root.pulsarity.ui.MappedElementTrees.fromObject(object.mapping[keys[i]], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UIETreeMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {pulsarity.ui.UIETreeMapping} message UIETreeMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIETreeMapping.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.objects || options.defaults)
                    object.mapping = {};
                let keys2;
                if (message.mapping && (keys2 = $Object.keys(message.mapping)).length) {
                    object.mapping = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.mapping, keys2[j]);
                        object.mapping[keys2[j]] = $root.pulsarity.ui.MappedElementTrees.toObject(message.mapping[keys2[j]], options, _depth + 1);
                    }
                }
                return object;
            };

            /**
             * Converts this UIETreeMapping to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIETreeMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIETreeMapping.prototype.toJSON = function() {
                return UIETreeMapping.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIETreeMapping
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIETreeMapping
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIETreeMapping.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIETreeMapping";
            };

            return UIETreeMapping;
        })();

        ui.UIMarkdownField = (function() {

            /**
             * Properties of a UIMarkdownField.
             * @typedef {Object} pulsarity.ui.UIMarkdownField.$Properties
             * @property {number|null} [elementId] UIMarkdownField elementId
             * @property {string|null} [text] UIMarkdownField text
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIMarkdownField.
             * @memberof pulsarity.ui
             * @interface IUIMarkdownField
             * @augments pulsarity.ui.UIMarkdownField.$Properties
             * @deprecated Use pulsarity.ui.UIMarkdownField.$Properties instead.
             */

            /**
             * Shape of a UIMarkdownField.
             * @typedef {pulsarity.ui.UIMarkdownField.$Properties} pulsarity.ui.UIMarkdownField.$Shape
             */

            /**
             * Constructs a new UIMarkdownField.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIMarkdownField.
             * @constructor
             * @param {pulsarity.ui.UIMarkdownField.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIMarkdownField = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIMarkdownField elementId.
             * @member {number} elementId
             * @memberof pulsarity.ui.UIMarkdownField
             * @instance
             */
            UIMarkdownField.prototype.elementId = 0;

            /**
             * UIMarkdownField text.
             * @member {string} text
             * @memberof pulsarity.ui.UIMarkdownField
             * @instance
             */
            UIMarkdownField.prototype.text = "";

            /**
             * Creates a new UIMarkdownField instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {pulsarity.ui.UIMarkdownField.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIMarkdownField} UIMarkdownField instance
             * @type {{
             *   (properties: pulsarity.ui.UIMarkdownField.$Shape): pulsarity.ui.UIMarkdownField & pulsarity.ui.UIMarkdownField.$Shape;
             *   (properties?: pulsarity.ui.UIMarkdownField.$Properties): pulsarity.ui.UIMarkdownField;
             * }}
             */
            UIMarkdownField.create = function(properties) {
                return new UIMarkdownField(properties);
            };

            /**
             * Encodes the specified UIMarkdownField message. Does not implicitly {@link pulsarity.ui.UIMarkdownField.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {pulsarity.ui.UIMarkdownField.$Properties} message UIMarkdownField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIMarkdownField.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId") && message.elementId !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elementId);
                if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIMarkdownField message, length delimited. Does not implicitly {@link pulsarity.ui.UIMarkdownField.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {pulsarity.ui.UIMarkdownField.$Properties} message UIMarkdownField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIMarkdownField.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIMarkdownField message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIMarkdownField & pulsarity.ui.UIMarkdownField.$Shape} UIMarkdownField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIMarkdownField.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIMarkdownField(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.elementId = value;
                            else
                                delete message.elementId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.text = value;
                            else
                                delete message.text;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIMarkdownField message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIMarkdownField & pulsarity.ui.UIMarkdownField.$Shape} UIMarkdownField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIMarkdownField.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIMarkdownField message.
             * @function verify
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIMarkdownField.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    if (!$util.isInteger(message.elementId))
                        return "elementId: integer expected";
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };

            /**
             * Creates a UIMarkdownField message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIMarkdownField} UIMarkdownField
             */
            UIMarkdownField.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIMarkdownField)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIMarkdownField: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIMarkdownField();
                if (object.elementId != null)
                    if ($Number(object.elementId) !== 0)
                        message.elementId = object.elementId | 0;
                if (object.text != null)
                    if (typeof object.text !== "string" || object.text.length)
                        message.text = $String(object.text);
                return message;
            };

            /**
             * Creates a plain object from a UIMarkdownField message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {pulsarity.ui.UIMarkdownField} message UIMarkdownField
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIMarkdownField.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.elementId = 0;
                    object.text = "";
                }
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    object.elementId = message.elementId;
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    object.text = message.text;
                return object;
            };

            /**
             * Converts this UIMarkdownField to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIMarkdownField
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIMarkdownField.prototype.toJSON = function() {
                return UIMarkdownField.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIMarkdownField
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIMarkdownField
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIMarkdownField.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIMarkdownField";
            };

            return UIMarkdownField;
        })();

        ui.UIMarkdownFields = (function() {

            /**
             * Properties of a UIMarkdownFields.
             * @typedef {Object} pulsarity.ui.UIMarkdownFields.$Properties
             * @property {Array.<pulsarity.ui.UIMarkdownField.$Properties>|null} [fields] UIMarkdownFields fields
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIMarkdownFields.
             * @memberof pulsarity.ui
             * @interface IUIMarkdownFields
             * @augments pulsarity.ui.UIMarkdownFields.$Properties
             * @deprecated Use pulsarity.ui.UIMarkdownFields.$Properties instead.
             */

            /**
             * Shape of a UIMarkdownFields.
             * @typedef {pulsarity.ui.UIMarkdownFields.$Properties} pulsarity.ui.UIMarkdownFields.$Shape
             */

            /**
             * Constructs a new UIMarkdownFields.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIMarkdownFields.
             * @constructor
             * @param {pulsarity.ui.UIMarkdownFields.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIMarkdownFields = function (properties) {
                this.fields = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIMarkdownFields fields.
             * @member {Array.<pulsarity.ui.UIMarkdownField.$Properties>} fields
             * @memberof pulsarity.ui.UIMarkdownFields
             * @instance
             */
            UIMarkdownFields.prototype.fields = $util.emptyArray;

            /**
             * Creates a new UIMarkdownFields instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {pulsarity.ui.UIMarkdownFields.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIMarkdownFields} UIMarkdownFields instance
             * @type {{
             *   (properties: pulsarity.ui.UIMarkdownFields.$Shape): pulsarity.ui.UIMarkdownFields & pulsarity.ui.UIMarkdownFields.$Shape;
             *   (properties?: pulsarity.ui.UIMarkdownFields.$Properties): pulsarity.ui.UIMarkdownFields;
             * }}
             */
            UIMarkdownFields.create = function(properties) {
                return new UIMarkdownFields(properties);
            };

            /**
             * Encodes the specified UIMarkdownFields message. Does not implicitly {@link pulsarity.ui.UIMarkdownFields.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {pulsarity.ui.UIMarkdownFields.$Properties} message UIMarkdownFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIMarkdownFields.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.fields != null && message.fields.length)
                    for (let i = 0; i < message.fields.length; ++i)
                        $root.pulsarity.ui.UIMarkdownField.encode(message.fields[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIMarkdownFields message, length delimited. Does not implicitly {@link pulsarity.ui.UIMarkdownFields.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {pulsarity.ui.UIMarkdownFields.$Properties} message UIMarkdownFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIMarkdownFields.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIMarkdownFields message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIMarkdownFields & pulsarity.ui.UIMarkdownFields.$Shape} UIMarkdownFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIMarkdownFields.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIMarkdownFields();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.fields && message.fields.length))
                                message.fields = [];
                            message.fields.push($root.pulsarity.ui.UIMarkdownField.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIMarkdownFields message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIMarkdownFields & pulsarity.ui.UIMarkdownFields.$Shape} UIMarkdownFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIMarkdownFields.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIMarkdownFields message.
             * @function verify
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIMarkdownFields.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.fields != null && $Object.hasOwnProperty.call(message, "fields")) {
                    if (!$Array.isArray(message.fields))
                        return "fields: array expected";
                    for (let i = 0; i < message.fields.length; ++i) {
                        let error = $root.pulsarity.ui.UIMarkdownField.verify(message.fields[i], _depth + 1);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UIMarkdownFields message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIMarkdownFields} UIMarkdownFields
             */
            UIMarkdownFields.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIMarkdownFields)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIMarkdownFields: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIMarkdownFields();
                if (object.fields) {
                    if (!$Array.isArray(object.fields))
                        throw $TypeError(".pulsarity.ui.UIMarkdownFields.fields: array expected");
                    message.fields = $Array(object.fields.length);
                    for (let i = 0; i < object.fields.length; ++i) {
                        if (!$util.isObject(object.fields[i]))
                            throw $TypeError(".pulsarity.ui.UIMarkdownFields.fields: object expected");
                        message.fields[i] = $root.pulsarity.ui.UIMarkdownField.fromObject(object.fields[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UIMarkdownFields message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {pulsarity.ui.UIMarkdownFields} message UIMarkdownFields
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIMarkdownFields.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.fields = [];
                if (message.fields && message.fields.length) {
                    object.fields = $Array(message.fields.length);
                    for (let j = 0; j < message.fields.length; ++j)
                        object.fields[j] = $root.pulsarity.ui.UIMarkdownField.toObject(message.fields[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this UIMarkdownFields to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIMarkdownFields
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIMarkdownFields.prototype.toJSON = function() {
                return UIMarkdownFields.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIMarkdownFields
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIMarkdownFields
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIMarkdownFields.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIMarkdownFields";
            };

            return UIMarkdownFields;
        })();

        ui.UIButtonField = (function() {

            /**
             * Properties of a UIButtonField.
             * @typedef {Object} pulsarity.ui.UIButtonField.$Properties
             * @property {number|null} [elementId] UIButtonField elementId
             * @property {string|null} [text] UIButtonField text
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIButtonField.
             * @memberof pulsarity.ui
             * @interface IUIButtonField
             * @augments pulsarity.ui.UIButtonField.$Properties
             * @deprecated Use pulsarity.ui.UIButtonField.$Properties instead.
             */

            /**
             * Shape of a UIButtonField.
             * @typedef {pulsarity.ui.UIButtonField.$Properties} pulsarity.ui.UIButtonField.$Shape
             */

            /**
             * Constructs a new UIButtonField.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIButtonField.
             * @constructor
             * @param {pulsarity.ui.UIButtonField.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIButtonField = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIButtonField elementId.
             * @member {number} elementId
             * @memberof pulsarity.ui.UIButtonField
             * @instance
             */
            UIButtonField.prototype.elementId = 0;

            /**
             * UIButtonField text.
             * @member {string} text
             * @memberof pulsarity.ui.UIButtonField
             * @instance
             */
            UIButtonField.prototype.text = "";

            /**
             * Creates a new UIButtonField instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {pulsarity.ui.UIButtonField.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIButtonField} UIButtonField instance
             * @type {{
             *   (properties: pulsarity.ui.UIButtonField.$Shape): pulsarity.ui.UIButtonField & pulsarity.ui.UIButtonField.$Shape;
             *   (properties?: pulsarity.ui.UIButtonField.$Properties): pulsarity.ui.UIButtonField;
             * }}
             */
            UIButtonField.create = function(properties) {
                return new UIButtonField(properties);
            };

            /**
             * Encodes the specified UIButtonField message. Does not implicitly {@link pulsarity.ui.UIButtonField.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {pulsarity.ui.UIButtonField.$Properties} message UIButtonField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIButtonField.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId") && message.elementId !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elementId);
                if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIButtonField message, length delimited. Does not implicitly {@link pulsarity.ui.UIButtonField.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {pulsarity.ui.UIButtonField.$Properties} message UIButtonField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIButtonField.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIButtonField message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIButtonField & pulsarity.ui.UIButtonField.$Shape} UIButtonField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIButtonField.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIButtonField(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.elementId = value;
                            else
                                delete message.elementId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.text = value;
                            else
                                delete message.text;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIButtonField message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIButtonField & pulsarity.ui.UIButtonField.$Shape} UIButtonField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIButtonField.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIButtonField message.
             * @function verify
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIButtonField.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    if (!$util.isInteger(message.elementId))
                        return "elementId: integer expected";
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };

            /**
             * Creates a UIButtonField message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIButtonField} UIButtonField
             */
            UIButtonField.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIButtonField)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIButtonField: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIButtonField();
                if (object.elementId != null)
                    if ($Number(object.elementId) !== 0)
                        message.elementId = object.elementId | 0;
                if (object.text != null)
                    if (typeof object.text !== "string" || object.text.length)
                        message.text = $String(object.text);
                return message;
            };

            /**
             * Creates a plain object from a UIButtonField message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {pulsarity.ui.UIButtonField} message UIButtonField
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIButtonField.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.elementId = 0;
                    object.text = "";
                }
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    object.elementId = message.elementId;
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    object.text = message.text;
                return object;
            };

            /**
             * Converts this UIButtonField to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIButtonField
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIButtonField.prototype.toJSON = function() {
                return UIButtonField.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIButtonField
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIButtonField
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIButtonField.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIButtonField";
            };

            return UIButtonField;
        })();

        ui.UIButtonFields = (function() {

            /**
             * Properties of a UIButtonFields.
             * @typedef {Object} pulsarity.ui.UIButtonFields.$Properties
             * @property {Array.<pulsarity.ui.UIButtonField.$Properties>|null} [fields] UIButtonFields fields
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIButtonFields.
             * @memberof pulsarity.ui
             * @interface IUIButtonFields
             * @augments pulsarity.ui.UIButtonFields.$Properties
             * @deprecated Use pulsarity.ui.UIButtonFields.$Properties instead.
             */

            /**
             * Shape of a UIButtonFields.
             * @typedef {pulsarity.ui.UIButtonFields.$Properties} pulsarity.ui.UIButtonFields.$Shape
             */

            /**
             * Constructs a new UIButtonFields.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIButtonFields.
             * @constructor
             * @param {pulsarity.ui.UIButtonFields.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIButtonFields = function (properties) {
                this.fields = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIButtonFields fields.
             * @member {Array.<pulsarity.ui.UIButtonField.$Properties>} fields
             * @memberof pulsarity.ui.UIButtonFields
             * @instance
             */
            UIButtonFields.prototype.fields = $util.emptyArray;

            /**
             * Creates a new UIButtonFields instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {pulsarity.ui.UIButtonFields.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIButtonFields} UIButtonFields instance
             * @type {{
             *   (properties: pulsarity.ui.UIButtonFields.$Shape): pulsarity.ui.UIButtonFields & pulsarity.ui.UIButtonFields.$Shape;
             *   (properties?: pulsarity.ui.UIButtonFields.$Properties): pulsarity.ui.UIButtonFields;
             * }}
             */
            UIButtonFields.create = function(properties) {
                return new UIButtonFields(properties);
            };

            /**
             * Encodes the specified UIButtonFields message. Does not implicitly {@link pulsarity.ui.UIButtonFields.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {pulsarity.ui.UIButtonFields.$Properties} message UIButtonFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIButtonFields.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.fields != null && message.fields.length)
                    for (let i = 0; i < message.fields.length; ++i)
                        $root.pulsarity.ui.UIButtonField.encode(message.fields[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIButtonFields message, length delimited. Does not implicitly {@link pulsarity.ui.UIButtonFields.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {pulsarity.ui.UIButtonFields.$Properties} message UIButtonFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIButtonFields.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIButtonFields message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIButtonFields & pulsarity.ui.UIButtonFields.$Shape} UIButtonFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIButtonFields.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIButtonFields();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.fields && message.fields.length))
                                message.fields = [];
                            message.fields.push($root.pulsarity.ui.UIButtonField.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIButtonFields message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIButtonFields & pulsarity.ui.UIButtonFields.$Shape} UIButtonFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIButtonFields.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIButtonFields message.
             * @function verify
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIButtonFields.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.fields != null && $Object.hasOwnProperty.call(message, "fields")) {
                    if (!$Array.isArray(message.fields))
                        return "fields: array expected";
                    for (let i = 0; i < message.fields.length; ++i) {
                        let error = $root.pulsarity.ui.UIButtonField.verify(message.fields[i], _depth + 1);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UIButtonFields message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIButtonFields} UIButtonFields
             */
            UIButtonFields.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIButtonFields)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIButtonFields: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIButtonFields();
                if (object.fields) {
                    if (!$Array.isArray(object.fields))
                        throw $TypeError(".pulsarity.ui.UIButtonFields.fields: array expected");
                    message.fields = $Array(object.fields.length);
                    for (let i = 0; i < object.fields.length; ++i) {
                        if (!$util.isObject(object.fields[i]))
                            throw $TypeError(".pulsarity.ui.UIButtonFields.fields: object expected");
                        message.fields[i] = $root.pulsarity.ui.UIButtonField.fromObject(object.fields[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UIButtonFields message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {pulsarity.ui.UIButtonFields} message UIButtonFields
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIButtonFields.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.fields = [];
                if (message.fields && message.fields.length) {
                    object.fields = $Array(message.fields.length);
                    for (let j = 0; j < message.fields.length; ++j)
                        object.fields[j] = $root.pulsarity.ui.UIButtonField.toObject(message.fields[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this UIButtonFields to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIButtonFields
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIButtonFields.prototype.toJSON = function() {
                return UIButtonFields.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIButtonFields
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIButtonFields
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIButtonFields.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIButtonFields";
            };

            return UIButtonFields;
        })();

        /**
         * FieldType enum.
         * @name pulsarity.ui.FieldType
         * @enum {number}
         * @property {number} FIELD_TYPE_UNKNOWN=0 FIELD_TYPE_UNKNOWN value
         * @property {number} FIELD_TYPE_TEXT=1 FIELD_TYPE_TEXT value
         * @property {number} FIELD_TYPE_BASIC_INT=2 FIELD_TYPE_BASIC_INT value
         * @property {number} FIELD_TYPE_NUMBER=3 FIELD_TYPE_NUMBER value
         * @property {number} FIELD_TYPE_RANGE=4 FIELD_TYPE_RANGE value
         * @property {number} FIELD_TYPE_SELECT=5 FIELD_TYPE_SELECT value
         * @property {number} FIELD_TYPE_CHECKBOX=6 FIELD_TYPE_CHECKBOX value
         * @property {number} FIELD_TYPE_PASSWORD=7 FIELD_TYPE_PASSWORD value
         * @property {number} FIELD_TYPE_DATE=8 FIELD_TYPE_DATE value
         * @property {number} FIELD_TYPE_TIME=9 FIELD_TYPE_TIME value
         * @property {number} FIELD_TYPE_DATETIME=16 FIELD_TYPE_DATETIME value
         * @property {number} FIELD_TYPE_EMAIL=17 FIELD_TYPE_EMAIL value
         * @property {number} FIELD_TYPE_TEL=18 FIELD_TYPE_TEL value
         * @property {number} FIELD_TYPE_URL=19 FIELD_TYPE_URL value
         */
        ui.FieldType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "FIELD_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "FIELD_TYPE_TEXT"] = 1;
            values[valuesById[2] = "FIELD_TYPE_BASIC_INT"] = 2;
            values[valuesById[3] = "FIELD_TYPE_NUMBER"] = 3;
            values[valuesById[4] = "FIELD_TYPE_RANGE"] = 4;
            values[valuesById[5] = "FIELD_TYPE_SELECT"] = 5;
            values[valuesById[6] = "FIELD_TYPE_CHECKBOX"] = 6;
            values[valuesById[7] = "FIELD_TYPE_PASSWORD"] = 7;
            values[valuesById[8] = "FIELD_TYPE_DATE"] = 8;
            values[valuesById[9] = "FIELD_TYPE_TIME"] = 9;
            values[valuesById[16] = "FIELD_TYPE_DATETIME"] = 16;
            values[valuesById[17] = "FIELD_TYPE_EMAIL"] = 17;
            values[valuesById[18] = "FIELD_TYPE_TEL"] = 18;
            values[valuesById[19] = "FIELD_TYPE_URL"] = 19;
            return values;
        })();

        ui.RangeData = (function() {

            /**
             * Properties of a RangeData.
             * @typedef {Object} pulsarity.ui.RangeData.$Properties
             * @property {number|null} [min] RangeData min
             * @property {number|null} [max] RangeData max
             * @property {number|null} [value] RangeData value
             * @property {number|null} [scale] RangeData scale
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a RangeData.
             * @memberof pulsarity.ui
             * @interface IRangeData
             * @augments pulsarity.ui.RangeData.$Properties
             * @deprecated Use pulsarity.ui.RangeData.$Properties instead.
             */

            /**
             * Shape of a RangeData.
             * @typedef {pulsarity.ui.RangeData.$Properties} pulsarity.ui.RangeData.$Shape
             */

            /**
             * Constructs a new RangeData.
             * @memberof pulsarity.ui
             * @classdesc Represents a RangeData.
             * @constructor
             * @param {pulsarity.ui.RangeData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const RangeData = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * RangeData min.
             * @member {number} min
             * @memberof pulsarity.ui.RangeData
             * @instance
             */
            RangeData.prototype.min = 0;

            /**
             * RangeData max.
             * @member {number} max
             * @memberof pulsarity.ui.RangeData
             * @instance
             */
            RangeData.prototype.max = 0;

            /**
             * RangeData value.
             * @member {number} value
             * @memberof pulsarity.ui.RangeData
             * @instance
             */
            RangeData.prototype.value = 0;

            /**
             * RangeData scale.
             * @member {number|null|undefined} scale
             * @memberof pulsarity.ui.RangeData
             * @instance
             */
            RangeData.prototype.scale = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(RangeData.prototype, "_scale", {
                get: $util.oneOfGetter($oneOfFields = ["scale"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RangeData instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {pulsarity.ui.RangeData.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.RangeData} RangeData instance
             * @type {{
             *   (properties: pulsarity.ui.RangeData.$Shape): pulsarity.ui.RangeData & pulsarity.ui.RangeData.$Shape;
             *   (properties?: pulsarity.ui.RangeData.$Properties): pulsarity.ui.RangeData;
             * }}
             */
            RangeData.create = function(properties) {
                return new RangeData(properties);
            };

            /**
             * Encodes the specified RangeData message. Does not implicitly {@link pulsarity.ui.RangeData.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {pulsarity.ui.RangeData.$Properties} message RangeData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RangeData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.min != null && $Object.hasOwnProperty.call(message, "min") && !$Object.is(message.min, 0))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.min);
                if (message.max != null && $Object.hasOwnProperty.call(message, "max") && !$Object.is(message.max, 0))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.max);
                if (message.value != null && $Object.hasOwnProperty.call(message, "value") && !$Object.is(message.value, 0))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.value);
                if (message.scale != null && $Object.hasOwnProperty.call(message, "scale"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.scale);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RangeData message, length delimited. Does not implicitly {@link pulsarity.ui.RangeData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {pulsarity.ui.RangeData.$Properties} message RangeData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RangeData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a RangeData message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.RangeData & pulsarity.ui.RangeData.$Shape} RangeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RangeData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.RangeData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 5)
                                break;
                            if (!$Object.is(value = reader.float(), 0))
                                message.min = value;
                            else
                                delete message.min;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 5)
                                break;
                            if (!$Object.is(value = reader.float(), 0))
                                message.max = value;
                            else
                                delete message.max;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 5)
                                break;
                            if (!$Object.is(value = reader.float(), 0))
                                message.value = value;
                            else
                                delete message.value;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 5)
                                break;
                            message.scale = reader.float();
                            message._scale = "scale";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a RangeData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.RangeData & pulsarity.ui.RangeData.$Shape} RangeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RangeData.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RangeData message.
             * @function verify
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RangeData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.min != null && $Object.hasOwnProperty.call(message, "min"))
                    if (typeof message.min !== "number")
                        return "min: number expected";
                if (message.max != null && $Object.hasOwnProperty.call(message, "max"))
                    if (typeof message.max !== "number")
                        return "max: number expected";
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                if (message.scale != null && $Object.hasOwnProperty.call(message, "scale")) {
                    properties._scale = 1;
                    if (typeof message.scale !== "number")
                        return "scale: number expected";
                }
                return null;
            };

            /**
             * Creates a RangeData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.RangeData} RangeData
             */
            RangeData.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.RangeData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.RangeData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.RangeData();
                if (object.min != null)
                    if (!$Object.is($Number(object.min), 0))
                        message.min = $Number(object.min);
                if (object.max != null)
                    if (!$Object.is($Number(object.max), 0))
                        message.max = $Number(object.max);
                if (object.value != null)
                    if (!$Object.is($Number(object.value), 0))
                        message.value = $Number(object.value);
                if (object.scale != null)
                    message.scale = $Number(object.scale);
                return message;
            };

            /**
             * Creates a plain object from a RangeData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {pulsarity.ui.RangeData} message RangeData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RangeData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.min = 0;
                    object.max = 0;
                    object.value = 0;
                }
                if (message.min != null && $Object.hasOwnProperty.call(message, "min"))
                    object.min = options.json && !$isFinite(message.min) ? $String(message.min) : message.min;
                if (message.max != null && $Object.hasOwnProperty.call(message, "max"))
                    object.max = options.json && !$isFinite(message.max) ? $String(message.max) : message.max;
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                    object.value = options.json && !$isFinite(message.value) ? $String(message.value) : message.value;
                if (message.scale != null && $Object.hasOwnProperty.call(message, "scale"))
                    object.scale = options.json && !$isFinite(message.scale) ? $String(message.scale) : message.scale;
                return object;
            };

            /**
             * Converts this RangeData to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.RangeData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RangeData.prototype.toJSON = function() {
                return RangeData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RangeData
             * @function getTypeUrl
             * @memberof pulsarity.ui.RangeData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RangeData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.RangeData";
            };

            return RangeData;
        })();

        ui.UIValueField = (function() {

            /**
             * Properties of a UIValueField.
             * @typedef {Object} pulsarity.ui.UIValueField.$Properties
             * @property {number|null} [elementId] UIValueField elementId
             * @property {pulsarity.ui.FieldType|null} [fieldType] UIValueField fieldType
             * @property {string|null} [text] UIValueField text
             * @property {boolean|null} [boolean] UIValueField boolean
             * @property {number|null} [integar] UIValueField integar
             * @property {number|null} [decimal] UIValueField decimal
             * @property {google.protobuf.Timestamp.$Properties|null} [datetime] UIValueField datetime
             * @property {pulsarity.ui.RangeData.$Properties|null} [range] UIValueField range
             * @property {"text"|"boolean"|"integar"|"decimal"|"datetime"|"range"} [value] UIValueField value
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIValueField.
             * @memberof pulsarity.ui
             * @interface IUIValueField
             * @augments pulsarity.ui.UIValueField.$Properties
             * @deprecated Use pulsarity.ui.UIValueField.$Properties instead.
             */

            /**
             * Narrowed shape of a UIValueField.
             * @typedef {{
             *   elementId?: number|null;
             *   fieldType?: pulsarity.ui.FieldType|null;
             *   text?: string|null;
             *   boolean?: boolean|null;
             *   integar?: number|null;
             *   decimal?: number|null;
             *   datetime?: google.protobuf.Timestamp.$Shape|null;
             *   range?: pulsarity.ui.RangeData.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ value?: undefined; text?: null; boolean?: null; integar?: null; decimal?: null; datetime?: null; range?: null }|{ value?: "text"; text: string; boolean?: null; integar?: null; decimal?: null; datetime?: null; range?: null }|{ value?: "boolean"; text?: null; boolean: boolean; integar?: null; decimal?: null; datetime?: null; range?: null }|{ value?: "integar"; text?: null; boolean?: null; integar: number; decimal?: null; datetime?: null; range?: null }|{ value?: "decimal"; text?: null; boolean?: null; integar?: null; decimal: number; datetime?: null; range?: null }|{ value?: "datetime"; text?: null; boolean?: null; integar?: null; decimal?: null; datetime: google.protobuf.Timestamp.$Shape; range?: null }|{ value?: "range"; text?: null; boolean?: null; integar?: null; decimal?: null; datetime?: null; range: pulsarity.ui.RangeData.$Shape })
             * )} pulsarity.ui.UIValueField.$Shape
             */

            /**
             * Constructs a new UIValueField.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIValueField.
             * @constructor
             * @param {pulsarity.ui.UIValueField.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIValueField = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIValueField elementId.
             * @member {number} elementId
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.elementId = 0;

            /**
             * UIValueField fieldType.
             * @member {pulsarity.ui.FieldType} fieldType
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.fieldType = 0;

            /**
             * UIValueField text.
             * @member {string|null|undefined} text
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.text = null;

            /**
             * UIValueField boolean.
             * @member {boolean|null|undefined} boolean
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.boolean = null;

            /**
             * UIValueField integar.
             * @member {number|null|undefined} integar
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.integar = null;

            /**
             * UIValueField decimal.
             * @member {number|null|undefined} decimal
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.decimal = null;

            /**
             * UIValueField datetime.
             * @member {google.protobuf.Timestamp.$Properties|null|undefined} datetime
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.datetime = null;

            /**
             * UIValueField range.
             * @member {pulsarity.ui.RangeData.$Properties|null|undefined} range
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            UIValueField.prototype.range = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * UIValueField value.
             * @member {"text"|"boolean"|"integar"|"decimal"|"datetime"|"range"|undefined} value
             * @memberof pulsarity.ui.UIValueField
             * @instance
             */
            $Object.defineProperty(UIValueField.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["text", "boolean", "integar", "decimal", "datetime", "range"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new UIValueField instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {pulsarity.ui.UIValueField.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIValueField} UIValueField instance
             * @type {{
             *   (properties: pulsarity.ui.UIValueField.$Shape): pulsarity.ui.UIValueField & pulsarity.ui.UIValueField.$Shape;
             *   (properties?: pulsarity.ui.UIValueField.$Properties): pulsarity.ui.UIValueField;
             * }}
             */
            UIValueField.create = function(properties) {
                return new UIValueField(properties);
            };

            /**
             * Encodes the specified UIValueField message. Does not implicitly {@link pulsarity.ui.UIValueField.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {pulsarity.ui.UIValueField.$Properties} message UIValueField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIValueField.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId") && message.elementId !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elementId);
                if (message.fieldType != null && $Object.hasOwnProperty.call(message, "fieldType") && message.fieldType !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fieldType);
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
                if (message.boolean != null && $Object.hasOwnProperty.call(message, "boolean"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolean);
                if (message.integar != null && $Object.hasOwnProperty.call(message, "integar"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.integar);
                if (message.decimal != null && $Object.hasOwnProperty.call(message, "decimal"))
                    writer.uint32(/* id 6, wireType 5 =*/53).float(message.decimal);
                if (message.datetime != null && $Object.hasOwnProperty.call(message, "datetime"))
                    $root.google.protobuf.Timestamp.encode(message.datetime, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.range != null && $Object.hasOwnProperty.call(message, "range"))
                    $root.pulsarity.ui.RangeData.encode(message.range, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIValueField message, length delimited. Does not implicitly {@link pulsarity.ui.UIValueField.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {pulsarity.ui.UIValueField.$Properties} message UIValueField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIValueField.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIValueField message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIValueField & pulsarity.ui.UIValueField.$Shape} UIValueField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIValueField.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIValueField(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.elementId = value;
                            else
                                delete message.elementId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.fieldType = value;
                            else
                                delete message.fieldType;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.text = reader.stringVerify();
                            message.value = "text";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.boolean = reader.bool();
                            message.value = "boolean";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.integar = reader.int32();
                            message.value = "integar";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 5)
                                break;
                            message.decimal = reader.float();
                            message.value = "decimal";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.datetime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), $undefined, _depth + 1, message.datetime);
                            message.value = "datetime";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.range = $root.pulsarity.ui.RangeData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.range);
                            message.value = "range";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIValueField message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIValueField & pulsarity.ui.UIValueField.$Shape} UIValueField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIValueField.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIValueField message.
             * @function verify
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIValueField.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    if (!$util.isInteger(message.elementId))
                        return "elementId: integer expected";
                if (message.fieldType != null && $Object.hasOwnProperty.call(message, "fieldType"))
                    if (typeof message.fieldType !== "number" || (message.fieldType | 0) !== message.fieldType)
                        return "fieldType: enum value expected";
                if (message.text != null && $Object.hasOwnProperty.call(message, "text")) {
                    properties.value = 1;
                    if (!$util.isString(message.text))
                        return "text: string expected";
                }
                if (message.boolean != null && $Object.hasOwnProperty.call(message, "boolean")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.boolean !== "boolean")
                        return "boolean: boolean expected";
                }
                if (message.integar != null && $Object.hasOwnProperty.call(message, "integar")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.integar))
                        return "integar: integer expected";
                }
                if (message.decimal != null && $Object.hasOwnProperty.call(message, "decimal")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.decimal !== "number")
                        return "decimal: number expected";
                }
                if (message.datetime != null && $Object.hasOwnProperty.call(message, "datetime")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.google.protobuf.Timestamp.verify(message.datetime, _depth + 1);
                        if (error)
                            return "datetime." + error;
                    }
                }
                if (message.range != null && $Object.hasOwnProperty.call(message, "range")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.pulsarity.ui.RangeData.verify(message.range, _depth + 1);
                        if (error)
                            return "range." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UIValueField message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIValueField} UIValueField
             */
            UIValueField.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIValueField)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIValueField: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIValueField();
                if (object.elementId != null)
                    if ($Number(object.elementId) !== 0)
                        message.elementId = object.elementId | 0;
                if (object.fieldType !== 0 && (typeof object.fieldType !== "string" || $root.pulsarity.ui.FieldType[object.fieldType] !== 0))
                    switch (object.fieldType) {
                    case "FIELD_TYPE_UNKNOWN":
                    case 0:
                        message.fieldType = 0;
                        break;
                    case "FIELD_TYPE_TEXT":
                    case 1:
                        message.fieldType = 1;
                        break;
                    case "FIELD_TYPE_BASIC_INT":
                    case 2:
                        message.fieldType = 2;
                        break;
                    case "FIELD_TYPE_NUMBER":
                    case 3:
                        message.fieldType = 3;
                        break;
                    case "FIELD_TYPE_RANGE":
                    case 4:
                        message.fieldType = 4;
                        break;
                    case "FIELD_TYPE_SELECT":
                    case 5:
                        message.fieldType = 5;
                        break;
                    case "FIELD_TYPE_CHECKBOX":
                    case 6:
                        message.fieldType = 6;
                        break;
                    case "FIELD_TYPE_PASSWORD":
                    case 7:
                        message.fieldType = 7;
                        break;
                    case "FIELD_TYPE_DATE":
                    case 8:
                        message.fieldType = 8;
                        break;
                    case "FIELD_TYPE_TIME":
                    case 9:
                        message.fieldType = 9;
                        break;
                    case "FIELD_TYPE_DATETIME":
                    case 16:
                        message.fieldType = 16;
                        break;
                    case "FIELD_TYPE_EMAIL":
                    case 17:
                        message.fieldType = 17;
                        break;
                    case "FIELD_TYPE_TEL":
                    case 18:
                        message.fieldType = 18;
                        break;
                    case "FIELD_TYPE_URL":
                    case 19:
                        message.fieldType = 19;
                        break;
                    default:
                        if (typeof object.fieldType === "number" && (object.fieldType | 0) === object.fieldType)
                            message.fieldType = object.fieldType;
                    }
                if (object.text != null)
                    message.text = $String(object.text);
                if (object.boolean != null)
                    message.boolean = $Boolean(object.boolean);
                if (object.integar != null)
                    message.integar = object.integar | 0;
                if (object.decimal != null)
                    message.decimal = $Number(object.decimal);
                if (object.datetime != null) {
                    if (!$util.isObject(object.datetime))
                        throw $TypeError(".pulsarity.ui.UIValueField.datetime: object expected");
                    message.datetime = $root.google.protobuf.Timestamp.fromObject(object.datetime, _depth + 1);
                }
                if (object.range != null) {
                    if (!$util.isObject(object.range))
                        throw $TypeError(".pulsarity.ui.UIValueField.range: object expected");
                    message.range = $root.pulsarity.ui.RangeData.fromObject(object.range, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a UIValueField message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {pulsarity.ui.UIValueField} message UIValueField
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIValueField.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.elementId = 0;
                    object.fieldType = options.enums === $String ? "FIELD_TYPE_UNKNOWN" : 0;
                }
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    object.elementId = message.elementId;
                if (message.fieldType != null && $Object.hasOwnProperty.call(message, "fieldType"))
                    object.fieldType = options.enums === $String ? $root.pulsarity.ui.FieldType[message.fieldType] === $undefined ? message.fieldType : $root.pulsarity.ui.FieldType[message.fieldType] : message.fieldType;
                if (message.text != null && $Object.hasOwnProperty.call(message, "text")) {
                    object.text = message.text;
                    if (options.oneofs)
                        object.value = "text";
                }
                if (message.boolean != null && $Object.hasOwnProperty.call(message, "boolean")) {
                    object.boolean = message.boolean;
                    if (options.oneofs)
                        object.value = "boolean";
                }
                if (message.integar != null && $Object.hasOwnProperty.call(message, "integar")) {
                    object.integar = message.integar;
                    if (options.oneofs)
                        object.value = "integar";
                }
                if (message.decimal != null && $Object.hasOwnProperty.call(message, "decimal")) {
                    object.decimal = options.json && !$isFinite(message.decimal) ? $String(message.decimal) : message.decimal;
                    if (options.oneofs)
                        object.value = "decimal";
                }
                if (message.datetime != null && $Object.hasOwnProperty.call(message, "datetime")) {
                    object.datetime = $root.google.protobuf.Timestamp.toObject(message.datetime, options, _depth + 1);
                    if (options.oneofs)
                        object.value = "datetime";
                }
                if (message.range != null && $Object.hasOwnProperty.call(message, "range")) {
                    object.range = $root.pulsarity.ui.RangeData.toObject(message.range, options, _depth + 1);
                    if (options.oneofs)
                        object.value = "range";
                }
                return object;
            };

            /**
             * Converts this UIValueField to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIValueField
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIValueField.prototype.toJSON = function() {
                return UIValueField.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIValueField
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIValueField
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIValueField.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIValueField";
            };

            return UIValueField;
        })();

        ui.UIValueFields = (function() {

            /**
             * Properties of a UIValueFields.
             * @typedef {Object} pulsarity.ui.UIValueFields.$Properties
             * @property {Array.<pulsarity.ui.UIValueField.$Properties>|null} [fields] UIValueFields fields
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIValueFields.
             * @memberof pulsarity.ui
             * @interface IUIValueFields
             * @augments pulsarity.ui.UIValueFields.$Properties
             * @deprecated Use pulsarity.ui.UIValueFields.$Properties instead.
             */

            /**
             * Shape of a UIValueFields.
             * @typedef {{
             *   fields?: Array.<pulsarity.ui.UIValueField.$Shape>|null;
             *   $unknowns?: Array.<Uint8Array>;
             * }} pulsarity.ui.UIValueFields.$Shape
             */

            /**
             * Constructs a new UIValueFields.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIValueFields.
             * @constructor
             * @param {pulsarity.ui.UIValueFields.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIValueFields = function (properties) {
                this.fields = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIValueFields fields.
             * @member {Array.<pulsarity.ui.UIValueField.$Properties>} fields
             * @memberof pulsarity.ui.UIValueFields
             * @instance
             */
            UIValueFields.prototype.fields = $util.emptyArray;

            /**
             * Creates a new UIValueFields instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {pulsarity.ui.UIValueFields.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIValueFields} UIValueFields instance
             * @type {{
             *   (properties: pulsarity.ui.UIValueFields.$Shape): pulsarity.ui.UIValueFields & pulsarity.ui.UIValueFields.$Shape;
             *   (properties?: pulsarity.ui.UIValueFields.$Properties): pulsarity.ui.UIValueFields;
             * }}
             */
            UIValueFields.create = function(properties) {
                return new UIValueFields(properties);
            };

            /**
             * Encodes the specified UIValueFields message. Does not implicitly {@link pulsarity.ui.UIValueFields.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {pulsarity.ui.UIValueFields.$Properties} message UIValueFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIValueFields.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.fields != null && message.fields.length)
                    for (let i = 0; i < message.fields.length; ++i)
                        $root.pulsarity.ui.UIValueField.encode(message.fields[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIValueFields message, length delimited. Does not implicitly {@link pulsarity.ui.UIValueFields.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {pulsarity.ui.UIValueFields.$Properties} message UIValueFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIValueFields.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIValueFields message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIValueFields & pulsarity.ui.UIValueFields.$Shape} UIValueFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIValueFields.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIValueFields();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.fields && message.fields.length))
                                message.fields = [];
                            message.fields.push($root.pulsarity.ui.UIValueField.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIValueFields message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIValueFields & pulsarity.ui.UIValueFields.$Shape} UIValueFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIValueFields.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIValueFields message.
             * @function verify
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIValueFields.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.fields != null && $Object.hasOwnProperty.call(message, "fields")) {
                    if (!$Array.isArray(message.fields))
                        return "fields: array expected";
                    for (let i = 0; i < message.fields.length; ++i) {
                        let error = $root.pulsarity.ui.UIValueField.verify(message.fields[i], _depth + 1);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UIValueFields message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIValueFields} UIValueFields
             */
            UIValueFields.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIValueFields)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIValueFields: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIValueFields();
                if (object.fields) {
                    if (!$Array.isArray(object.fields))
                        throw $TypeError(".pulsarity.ui.UIValueFields.fields: array expected");
                    message.fields = $Array(object.fields.length);
                    for (let i = 0; i < object.fields.length; ++i) {
                        if (!$util.isObject(object.fields[i]))
                            throw $TypeError(".pulsarity.ui.UIValueFields.fields: object expected");
                        message.fields[i] = $root.pulsarity.ui.UIValueField.fromObject(object.fields[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UIValueFields message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {pulsarity.ui.UIValueFields} message UIValueFields
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIValueFields.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.fields = [];
                if (message.fields && message.fields.length) {
                    object.fields = $Array(message.fields.length);
                    for (let j = 0; j < message.fields.length; ++j)
                        object.fields[j] = $root.pulsarity.ui.UIValueField.toObject(message.fields[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this UIValueFields to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIValueFields
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIValueFields.prototype.toJSON = function() {
                return UIValueFields.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIValueFields
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIValueFields
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIValueFields.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIValueFields";
            };

            return UIValueFields;
        })();

        ui.UIElementUpdate = (function() {

            /**
             * Properties of a UIElementUpdate.
             * @typedef {Object} pulsarity.ui.UIElementUpdate.$Properties
             * @property {pulsarity.ui.UIElementType|null} [elementType] UIElementUpdate elementType
             * @property {number|null} [elementId] UIElementUpdate elementId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UIElementUpdate.
             * @memberof pulsarity.ui
             * @interface IUIElementUpdate
             * @augments pulsarity.ui.UIElementUpdate.$Properties
             * @deprecated Use pulsarity.ui.UIElementUpdate.$Properties instead.
             */

            /**
             * Shape of a UIElementUpdate.
             * @typedef {pulsarity.ui.UIElementUpdate.$Properties} pulsarity.ui.UIElementUpdate.$Shape
             */

            /**
             * Constructs a new UIElementUpdate.
             * @memberof pulsarity.ui
             * @classdesc Represents a UIElementUpdate.
             * @constructor
             * @param {pulsarity.ui.UIElementUpdate.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UIElementUpdate = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UIElementUpdate elementType.
             * @member {pulsarity.ui.UIElementType} elementType
             * @memberof pulsarity.ui.UIElementUpdate
             * @instance
             */
            UIElementUpdate.prototype.elementType = 0;

            /**
             * UIElementUpdate elementId.
             * @member {number} elementId
             * @memberof pulsarity.ui.UIElementUpdate
             * @instance
             */
            UIElementUpdate.prototype.elementId = 0;

            /**
             * Creates a new UIElementUpdate instance using the specified properties.
             * @function create
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {pulsarity.ui.UIElementUpdate.$Properties=} [properties] Properties to set
             * @returns {pulsarity.ui.UIElementUpdate} UIElementUpdate instance
             * @type {{
             *   (properties: pulsarity.ui.UIElementUpdate.$Shape): pulsarity.ui.UIElementUpdate & pulsarity.ui.UIElementUpdate.$Shape;
             *   (properties?: pulsarity.ui.UIElementUpdate.$Properties): pulsarity.ui.UIElementUpdate;
             * }}
             */
            UIElementUpdate.create = function(properties) {
                return new UIElementUpdate(properties);
            };

            /**
             * Encodes the specified UIElementUpdate message. Does not implicitly {@link pulsarity.ui.UIElementUpdate.verify|verify} messages.
             * @function encode
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {pulsarity.ui.UIElementUpdate.$Properties} message UIElementUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementUpdate.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.elementType != null && $Object.hasOwnProperty.call(message, "elementType") && message.elementType !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.elementType);
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId") && message.elementId !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.elementId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UIElementUpdate message, length delimited. Does not implicitly {@link pulsarity.ui.UIElementUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {pulsarity.ui.UIElementUpdate.$Properties} message UIElementUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIElementUpdate.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UIElementUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pulsarity.ui.UIElementUpdate & pulsarity.ui.UIElementUpdate.$Shape} UIElementUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementUpdate.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ui.UIElementUpdate(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.elementType = value;
                            else
                                delete message.elementType;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.elementId = value;
                            else
                                delete message.elementId;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UIElementUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pulsarity.ui.UIElementUpdate & pulsarity.ui.UIElementUpdate.$Shape} UIElementUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIElementUpdate.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UIElementUpdate message.
             * @function verify
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIElementUpdate.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.elementType != null && $Object.hasOwnProperty.call(message, "elementType"))
                    if (typeof message.elementType !== "number" || (message.elementType | 0) !== message.elementType)
                        return "elementType: enum value expected";
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    if (!$util.isInteger(message.elementId))
                        return "elementId: integer expected";
                return null;
            };

            /**
             * Creates a UIElementUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pulsarity.ui.UIElementUpdate} UIElementUpdate
             */
            UIElementUpdate.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ui.UIElementUpdate)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ui.UIElementUpdate: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ui.UIElementUpdate();
                if (object.elementType !== 0 && (typeof object.elementType !== "string" || $root.pulsarity.ui.UIElementType[object.elementType] !== 0))
                    switch (object.elementType) {
                    case "ELEMENT_TYPE_UNKNOWN":
                    case 0:
                        message.elementType = 0;
                        break;
                    case "ELEMENT_TYPE_ETREE":
                    case 1:
                        message.elementType = 1;
                        break;
                    case "ELEMENT_TYPE_MARKDOWN":
                    case 2:
                        message.elementType = 2;
                        break;
                    case "ELEMENT_TYPE_BUTTON":
                    case 3:
                        message.elementType = 3;
                        break;
                    case "ELEMENT_TYPE_VALUE":
                    case 4:
                        message.elementType = 4;
                        break;
                    default:
                        if (typeof object.elementType === "number" && (object.elementType | 0) === object.elementType)
                            message.elementType = object.elementType;
                    }
                if (object.elementId != null)
                    if ($Number(object.elementId) !== 0)
                        message.elementId = object.elementId | 0;
                return message;
            };

            /**
             * Creates a plain object from a UIElementUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {pulsarity.ui.UIElementUpdate} message UIElementUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIElementUpdate.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.elementType = options.enums === $String ? "ELEMENT_TYPE_UNKNOWN" : 0;
                    object.elementId = 0;
                }
                if (message.elementType != null && $Object.hasOwnProperty.call(message, "elementType"))
                    object.elementType = options.enums === $String ? $root.pulsarity.ui.UIElementType[message.elementType] === $undefined ? message.elementType : $root.pulsarity.ui.UIElementType[message.elementType] : message.elementType;
                if (message.elementId != null && $Object.hasOwnProperty.call(message, "elementId"))
                    object.elementId = message.elementId;
                return object;
            };

            /**
             * Converts this UIElementUpdate to JSON.
             * @function toJSON
             * @memberof pulsarity.ui.UIElementUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIElementUpdate.prototype.toJSON = function() {
                return UIElementUpdate.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UIElementUpdate
             * @function getTypeUrl
             * @memberof pulsarity.ui.UIElementUpdate
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UIElementUpdate.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/pulsarity.ui.UIElementUpdate";
            };

            return UIElementUpdate;
        })();

        return ui;
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
         * @property {number} EVENT_UI_UPDATE=6 EVENT_UI_UPDATE value
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
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "EVENT_UNSPECIFIED"] = 0;
            values[valuesById[1] = "EVENT_HEARTBEAT"] = 1;
            values[valuesById[2] = "EVENT_PERMISSIONS_UPDATE"] = 2;
            values[valuesById[3] = "EVENT_STARTUP"] = 3;
            values[valuesById[4] = "EVENT_SHUTDOWN"] = 4;
            values[valuesById[5] = "EVENT_RESTART"] = 5;
            values[valuesById[6] = "EVENT_UI_UPDATE"] = 6;
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PilotAddData = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            PilotAddData.create = function(properties) {
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
            PilotAddData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId") && message.pilotId !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pilotId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            PilotAddData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            PilotAddData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.PilotAddData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            PilotAddData.decodeDelimited = function(reader) {
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
            PilotAddData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId"))
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
            PilotAddData.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ws.PilotAddData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ws.PilotAddData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ws.PilotAddData();
                if (object.pilotId != null)
                    if ($Number(object.pilotId) !== 0)
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
            PilotAddData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.pilotId = 0;
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId"))
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
            PilotAddData.prototype.toJSON = function() {
                return PilotAddData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PilotAddData
             * @function getTypeUrl
             * @memberof pulsarity.ws.PilotAddData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PilotAddData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PilotAlterData = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            PilotAlterData.create = function(properties) {
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
            PilotAlterData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId") && message.pilotId !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pilotId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            PilotAlterData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            PilotAlterData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.PilotAlterData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            PilotAlterData.decodeDelimited = function(reader) {
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
            PilotAlterData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId"))
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
            PilotAlterData.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ws.PilotAlterData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ws.PilotAlterData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ws.PilotAlterData();
                if (object.pilotId != null)
                    if ($Number(object.pilotId) !== 0)
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
            PilotAlterData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.pilotId = 0;
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId"))
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
            PilotAlterData.prototype.toJSON = function() {
                return PilotAlterData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PilotAlterData
             * @function getTypeUrl
             * @memberof pulsarity.ws.PilotAlterData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PilotAlterData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PilotDeleteData = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            PilotDeleteData.create = function(properties) {
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
            PilotDeleteData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId") && message.pilotId !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pilotId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            PilotDeleteData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            PilotDeleteData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.PilotDeleteData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            PilotDeleteData.decodeDelimited = function(reader) {
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
            PilotDeleteData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId"))
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
            PilotDeleteData.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ws.PilotDeleteData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ws.PilotDeleteData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ws.PilotDeleteData();
                if (object.pilotId != null)
                    if ($Number(object.pilotId) !== 0)
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
            PilotDeleteData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.pilotId = 0;
                if (message.pilotId != null && $Object.hasOwnProperty.call(message, "pilotId"))
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
            PilotDeleteData.prototype.toJSON = function() {
                return PilotDeleteData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PilotDeleteData
             * @function getTypeUrl
             * @memberof pulsarity.ws.PilotDeleteData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PilotDeleteData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {pulsarity.ui.UIElementUpdate.$Properties|null} [uiElementUpdate] WebsocketEvent uiElementUpdate
             * @property {pulsarity.ws.PilotAddData.$Properties|null} [pilotAdd] WebsocketEvent pilotAdd
             * @property {pulsarity.ws.PilotAlterData.$Properties|null} [pilotAlter] WebsocketEvent pilotAlter
             * @property {pulsarity.ws.PilotDeleteData.$Properties|null} [pilotDelete] WebsocketEvent pilotDelete
             * @property {"uiElementUpdate"|"pilotAdd"|"pilotAlter"|"pilotDelete"} [eventData] WebsocketEvent eventData
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             *   uiElementUpdate?: pulsarity.ui.UIElementUpdate.$Shape|null;
             *   pilotAdd?: pulsarity.ws.PilotAddData.$Shape|null;
             *   pilotAlter?: pulsarity.ws.PilotAlterData.$Shape|null;
             *   pilotDelete?: pulsarity.ws.PilotDeleteData.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ eventData?: undefined; uiElementUpdate?: null; pilotAdd?: null; pilotAlter?: null; pilotDelete?: null }|{ eventData?: "uiElementUpdate"; uiElementUpdate: pulsarity.ui.UIElementUpdate.$Shape; pilotAdd?: null; pilotAlter?: null; pilotDelete?: null }|{ eventData?: "pilotAdd"; uiElementUpdate?: null; pilotAdd: pulsarity.ws.PilotAddData.$Shape; pilotAlter?: null; pilotDelete?: null }|{ eventData?: "pilotAlter"; uiElementUpdate?: null; pilotAdd?: null; pilotAlter: pulsarity.ws.PilotAlterData.$Shape; pilotDelete?: null }|{ eventData?: "pilotDelete"; uiElementUpdate?: null; pilotAdd?: null; pilotAlter?: null; pilotDelete: pulsarity.ws.PilotDeleteData.$Shape })
             * )} pulsarity.ws.WebsocketEvent.$Shape
             */

            /**
             * Constructs a new WebsocketEvent.
             * @memberof pulsarity.ws
             * @classdesc Represents a WebsocketEvent.
             * @constructor
             * @param {pulsarity.ws.WebsocketEvent.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const WebsocketEvent = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
             * WebsocketEvent uiElementUpdate.
             * @member {pulsarity.ui.UIElementUpdate.$Properties|null|undefined} uiElementUpdate
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            WebsocketEvent.prototype.uiElementUpdate = null;

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
             * @member {"uiElementUpdate"|"pilotAdd"|"pilotAlter"|"pilotDelete"|undefined} eventData
             * @memberof pulsarity.ws.WebsocketEvent
             * @instance
             */
            $Object.defineProperty(WebsocketEvent.prototype, "eventData", {
                get: $util.oneOfGetter($oneOfFields = ["uiElementUpdate", "pilotAdd", "pilotAlter", "pilotDelete"]),
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
            WebsocketEvent.create = function(properties) {
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
            WebsocketEvent.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.uuid != null && $Object.hasOwnProperty.call(message, "uuid") && message.uuid.length)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.uuid);
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId") && message.eventId !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.eventId);
                if (message.uiElementUpdate != null && $Object.hasOwnProperty.call(message, "uiElementUpdate"))
                    $root.pulsarity.ui.UIElementUpdate.encode(message.uiElementUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.pilotAdd != null && $Object.hasOwnProperty.call(message, "pilotAdd"))
                    $root.pulsarity.ws.PilotAddData.encode(message.pilotAdd, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
                if (message.pilotAlter != null && $Object.hasOwnProperty.call(message, "pilotAlter"))
                    $root.pulsarity.ws.PilotAlterData.encode(message.pilotAlter, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
                if (message.pilotDelete != null && $Object.hasOwnProperty.call(message, "pilotDelete"))
                    $root.pulsarity.ws.PilotDeleteData.encode(message.pilotDelete, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            WebsocketEvent.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            WebsocketEvent.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.pulsarity.ws.WebsocketEvent(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.uiElementUpdate = $root.pulsarity.ui.UIElementUpdate.decode(reader, reader.uint32(), $undefined, _depth + 1, message.uiElementUpdate);
                            message.eventData = "uiElementUpdate";
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            message.pilotAdd = $root.pulsarity.ws.PilotAddData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.pilotAdd);
                            message.eventData = "pilotAdd";
                            continue;
                        }
                    case 17: {
                            if (wireType !== 2)
                                break;
                            message.pilotAlter = $root.pulsarity.ws.PilotAlterData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.pilotAlter);
                            message.eventData = "pilotAlter";
                            continue;
                        }
                    case 18: {
                            if (wireType !== 2)
                                break;
                            message.pilotDelete = $root.pulsarity.ws.PilotDeleteData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.pilotDelete);
                            message.eventData = "pilotDelete";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            WebsocketEvent.decodeDelimited = function(reader) {
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
            WebsocketEvent.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.uuid != null && $Object.hasOwnProperty.call(message, "uuid"))
                    if (!(message.uuid && typeof message.uuid.length === "number" || $util.isString(message.uuid)))
                        return "uuid: buffer expected";
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    if (typeof message.eventId !== "number" || (message.eventId | 0) !== message.eventId)
                        return "eventId: enum value expected";
                if (message.uiElementUpdate != null && $Object.hasOwnProperty.call(message, "uiElementUpdate")) {
                    properties.eventData = 1;
                    {
                        let error = $root.pulsarity.ui.UIElementUpdate.verify(message.uiElementUpdate, _depth + 1);
                        if (error)
                            return "uiElementUpdate." + error;
                    }
                }
                if (message.pilotAdd != null && $Object.hasOwnProperty.call(message, "pilotAdd")) {
                    if (properties.eventData === 1)
                        return "eventData: multiple values";
                    properties.eventData = 1;
                    {
                        let error = $root.pulsarity.ws.PilotAddData.verify(message.pilotAdd, _depth + 1);
                        if (error)
                            return "pilotAdd." + error;
                    }
                }
                if (message.pilotAlter != null && $Object.hasOwnProperty.call(message, "pilotAlter")) {
                    if (properties.eventData === 1)
                        return "eventData: multiple values";
                    properties.eventData = 1;
                    {
                        let error = $root.pulsarity.ws.PilotAlterData.verify(message.pilotAlter, _depth + 1);
                        if (error)
                            return "pilotAlter." + error;
                    }
                }
                if (message.pilotDelete != null && $Object.hasOwnProperty.call(message, "pilotDelete")) {
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
            WebsocketEvent.fromObject = function (object, _depth) {
                if (object instanceof $root.pulsarity.ws.WebsocketEvent)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".pulsarity.ws.WebsocketEvent: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.pulsarity.ws.WebsocketEvent();
                if (object.uuid != null)
                    if (object.uuid.length)
                        if (typeof object.uuid === "string")
                            $util.base64.decode(object.uuid, message.uuid = $util.newBuffer($util.base64.length(object.uuid)), 0);
                        else if (object.uuid.length >= 0)
                            message.uuid = object.uuid;
                if (object.eventId !== 0 && (typeof object.eventId !== "string" || $root.pulsarity.ws.EventID[object.eventId] !== 0))
                    switch (object.eventId) {
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
                    case "EVENT_UI_UPDATE":
                    case 6:
                        message.eventId = 6;
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
                    default:
                        if (typeof object.eventId === "number" && (object.eventId | 0) === object.eventId)
                            message.eventId = object.eventId;
                    }
                if (object.uiElementUpdate != null) {
                    if (!$util.isObject(object.uiElementUpdate))
                        throw $TypeError(".pulsarity.ws.WebsocketEvent.uiElementUpdate: object expected");
                    message.uiElementUpdate = $root.pulsarity.ui.UIElementUpdate.fromObject(object.uiElementUpdate, _depth + 1);
                }
                if (object.pilotAdd != null) {
                    if (!$util.isObject(object.pilotAdd))
                        throw $TypeError(".pulsarity.ws.WebsocketEvent.pilotAdd: object expected");
                    message.pilotAdd = $root.pulsarity.ws.PilotAddData.fromObject(object.pilotAdd, _depth + 1);
                }
                if (object.pilotAlter != null) {
                    if (!$util.isObject(object.pilotAlter))
                        throw $TypeError(".pulsarity.ws.WebsocketEvent.pilotAlter: object expected");
                    message.pilotAlter = $root.pulsarity.ws.PilotAlterData.fromObject(object.pilotAlter, _depth + 1);
                }
                if (object.pilotDelete != null) {
                    if (!$util.isObject(object.pilotDelete))
                        throw $TypeError(".pulsarity.ws.WebsocketEvent.pilotDelete: object expected");
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
            WebsocketEvent.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if (options.bytes === $String)
                        object.uuid = "";
                    else {
                        object.uuid = [];
                        if (options.bytes !== $Array)
                            object.uuid = $util.newBuffer(object.uuid);
                    }
                    object.eventId = options.enums === $String ? "EVENT_UNSPECIFIED" : 0;
                }
                if (message.uuid != null && $Object.hasOwnProperty.call(message, "uuid"))
                    object.uuid = options.bytes === $String ? $util.base64.encode(message.uuid, 0, message.uuid.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.uuid) : message.uuid;
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    object.eventId = options.enums === $String ? $root.pulsarity.ws.EventID[message.eventId] === $undefined ? message.eventId : $root.pulsarity.ws.EventID[message.eventId] : message.eventId;
                if (message.uiElementUpdate != null && $Object.hasOwnProperty.call(message, "uiElementUpdate")) {
                    object.uiElementUpdate = $root.pulsarity.ui.UIElementUpdate.toObject(message.uiElementUpdate, options, _depth + 1);
                    if (options.oneofs)
                        object.eventData = "uiElementUpdate";
                }
                if (message.pilotAdd != null && $Object.hasOwnProperty.call(message, "pilotAdd")) {
                    object.pilotAdd = $root.pulsarity.ws.PilotAddData.toObject(message.pilotAdd, options, _depth + 1);
                    if (options.oneofs)
                        object.eventData = "pilotAdd";
                }
                if (message.pilotAlter != null && $Object.hasOwnProperty.call(message, "pilotAlter")) {
                    object.pilotAlter = $root.pulsarity.ws.PilotAlterData.toObject(message.pilotAlter, options, _depth + 1);
                    if (options.oneofs)
                        object.eventData = "pilotAlter";
                }
                if (message.pilotDelete != null && $Object.hasOwnProperty.call(message, "pilotDelete")) {
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
            WebsocketEvent.prototype.toJSON = function() {
                return WebsocketEvent.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for WebsocketEvent
             * @function getTypeUrl
             * @memberof pulsarity.ws.WebsocketEvent
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            WebsocketEvent.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Timestamp = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

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
            Timestamp.create = function(properties) {
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
            Timestamp.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds") && (typeof message.seconds === "object" ? message.seconds.low || message.seconds.high : message.seconds !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos") && message.nanos !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
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
            Timestamp.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
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
            Timestamp.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.Timestamp(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
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
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
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
            Timestamp.decodeDelimited = function(reader) {
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
            Timestamp.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos"))
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
            Timestamp.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.Timestamp: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if (typeof object.seconds === "object" ? object.seconds.low || object.seconds.high : $Number(object.seconds) !== 0)
                        if ($util.Long)
                            message.seconds = $util.Long.fromValue(object.seconds, false);
                        else if (typeof object.seconds === "string")
                            message.seconds = $parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    if ($Number(object.nanos) !== 0)
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
            Timestamp.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.seconds = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.seconds = typeof message.seconds === "number" ? $BigInt(message.seconds) : $util.Long.fromBits(message.seconds.low >>> 0, message.seconds.high >>> 0, false).toBigInt();
                    else if (typeof message.seconds === "number")
                        object.seconds = options.longs === $String ? $String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === $String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === $Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos"))
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
            Timestamp.prototype.toJSON = function() {
                return Timestamp.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Timestamp.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
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
