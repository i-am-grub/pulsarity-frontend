import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace pulsarity. */
export namespace pulsarity {

    /** Namespace db. */
    namespace db {

        /**
         * Properties of an Attribute.
         * @deprecated Use pulsarity.db.Attribute.$Properties instead.
         */
        interface IAttribute extends pulsarity.db.Attribute.$Properties {
        }

        /** Represents an Attribute. */
        class Attribute {

            /**
             * Constructs a new Attribute.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.Attribute.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Attribute name. */
            name: string;

            /**
             * Creates a new Attribute instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Attribute instance
             */
            static create(properties: pulsarity.db.Attribute.$Shape): pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape;
            static create(properties?: pulsarity.db.Attribute.$Properties): pulsarity.db.Attribute;

            /**
             * Encodes the specified Attribute message. Does not implicitly {@link pulsarity.db.Attribute.verify|verify} messages.
             * @param message Attribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.Attribute.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Attribute message, length delimited. Does not implicitly {@link pulsarity.db.Attribute.verify|verify} messages.
             * @param message Attribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.Attribute.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Attribute message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape} Attribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape;

            /**
             * Decodes an Attribute message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape} Attribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.Attribute & pulsarity.db.Attribute.$Shape;

            /**
             * Verifies an Attribute message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Attribute
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.Attribute;

            /**
             * Creates a plain object from an Attribute message. Also converts values to other types if specified.
             * @param message Attribute
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.Attribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Attribute to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Attribute
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Attribute {

            /** Properties of an Attribute. */
            interface $Properties {

                /** Attribute name */
                name?: (string|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Attribute. */
            type $Shape = pulsarity.db.Attribute.$Properties;
        }

        /**
         * Properties of a Pilot.
         * @deprecated Use pulsarity.db.Pilot.$Properties instead.
         */
        interface IPilot extends pulsarity.db.Pilot.$Properties {
        }

        /** Represents a Pilot. */
        class Pilot {

            /**
             * Constructs a new Pilot.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.Pilot.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Pilot id. */
            id: number;

            /** Pilot displayCallsign. */
            displayCallsign: string;

            /** Pilot displayName. */
            displayName: string;

            /** Pilot attributes. */
            attributes: pulsarity.db.Attribute.$Properties[];

            /**
             * Creates a new Pilot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pilot instance
             */
            static create(properties: pulsarity.db.Pilot.$Shape): pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape;
            static create(properties?: pulsarity.db.Pilot.$Properties): pulsarity.db.Pilot;

            /**
             * Encodes the specified Pilot message. Does not implicitly {@link pulsarity.db.Pilot.verify|verify} messages.
             * @param message Pilot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.Pilot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pilot message, length delimited. Does not implicitly {@link pulsarity.db.Pilot.verify|verify} messages.
             * @param message Pilot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.Pilot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pilot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape} Pilot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape;

            /**
             * Decodes a Pilot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape} Pilot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.Pilot & pulsarity.db.Pilot.$Shape;

            /**
             * Verifies a Pilot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pilot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pilot
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.Pilot;

            /**
             * Creates a plain object from a Pilot message. Also converts values to other types if specified.
             * @param message Pilot
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.Pilot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pilot to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Pilot
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Pilot {

            /** Properties of a Pilot. */
            interface $Properties {

                /** Pilot id */
                id?: (number|null);

                /** Pilot displayCallsign */
                displayCallsign?: (string|null);

                /** Pilot displayName */
                displayName?: (string|null);

                /** Pilot attributes */
                attributes?: (pulsarity.db.Attribute.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Pilot. */
            type $Shape = pulsarity.db.Pilot.$Properties;
        }

        /**
         * Properties of a Pilots.
         * @deprecated Use pulsarity.db.Pilots.$Properties instead.
         */
        interface IPilots extends pulsarity.db.Pilots.$Properties {
        }

        /** Represents a Pilots. */
        class Pilots {

            /**
             * Constructs a new Pilots.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.Pilots.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Pilots pilots. */
            pilots: pulsarity.db.Pilot.$Properties[];

            /**
             * Creates a new Pilots instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pilots instance
             */
            static create(properties: pulsarity.db.Pilots.$Shape): pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape;
            static create(properties?: pulsarity.db.Pilots.$Properties): pulsarity.db.Pilots;

            /**
             * Encodes the specified Pilots message. Does not implicitly {@link pulsarity.db.Pilots.verify|verify} messages.
             * @param message Pilots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.Pilots.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pilots message, length delimited. Does not implicitly {@link pulsarity.db.Pilots.verify|verify} messages.
             * @param message Pilots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.Pilots.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pilots message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape} Pilots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape;

            /**
             * Decodes a Pilots message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape} Pilots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.Pilots & pulsarity.db.Pilots.$Shape;

            /**
             * Verifies a Pilots message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pilots message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pilots
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.Pilots;

            /**
             * Creates a plain object from a Pilots message. Also converts values to other types if specified.
             * @param message Pilots
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.Pilots, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pilots to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Pilots
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Pilots {

            /** Properties of a Pilots. */
            interface $Properties {

                /** Pilots pilots */
                pilots?: (pulsarity.db.Pilot.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Pilots. */
            type $Shape = pulsarity.db.Pilots.$Properties;
        }

        /**
         * Properties of a RaceEvent.
         * @deprecated Use pulsarity.db.RaceEvent.$Properties instead.
         */
        interface IRaceEvent extends pulsarity.db.RaceEvent.$Properties {
        }

        /** Represents a RaceEvent. */
        class RaceEvent {

            /**
             * Constructs a new RaceEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.RaceEvent.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RaceEvent id. */
            id: number;

            /** RaceEvent name. */
            name: string;

            /** RaceEvent date. */
            date?: (google.protobuf.Timestamp.$Properties|null);

            /** RaceEvent attributes. */
            attributes: pulsarity.db.Attribute.$Properties[];

            /**
             * Creates a new RaceEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RaceEvent instance
             */
            static create(properties: pulsarity.db.RaceEvent.$Shape): pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape;
            static create(properties?: pulsarity.db.RaceEvent.$Properties): pulsarity.db.RaceEvent;

            /**
             * Encodes the specified RaceEvent message. Does not implicitly {@link pulsarity.db.RaceEvent.verify|verify} messages.
             * @param message RaceEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.RaceEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RaceEvent message, length delimited. Does not implicitly {@link pulsarity.db.RaceEvent.verify|verify} messages.
             * @param message RaceEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.RaceEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RaceEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape} RaceEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape;

            /**
             * Decodes a RaceEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape} RaceEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.RaceEvent & pulsarity.db.RaceEvent.$Shape;

            /**
             * Verifies a RaceEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RaceEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RaceEvent
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.RaceEvent;

            /**
             * Creates a plain object from a RaceEvent message. Also converts values to other types if specified.
             * @param message RaceEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.RaceEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RaceEvent to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RaceEvent
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RaceEvent {

            /** Properties of a RaceEvent. */
            interface $Properties {

                /** RaceEvent id */
                id?: (number|null);

                /** RaceEvent name */
                name?: (string|null);

                /** RaceEvent date */
                date?: (google.protobuf.Timestamp.$Properties|null);

                /** RaceEvent attributes */
                attributes?: (pulsarity.db.Attribute.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RaceEvent. */
            type $Shape = pulsarity.db.RaceEvent.$Properties;
        }

        /**
         * Properties of a RaceEvents.
         * @deprecated Use pulsarity.db.RaceEvents.$Properties instead.
         */
        interface IRaceEvents extends pulsarity.db.RaceEvents.$Properties {
        }

        /** Represents a RaceEvents. */
        class RaceEvents {

            /**
             * Constructs a new RaceEvents.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.RaceEvents.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RaceEvents events. */
            events: pulsarity.db.RaceEvent.$Properties[];

            /**
             * Creates a new RaceEvents instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RaceEvents instance
             */
            static create(properties: pulsarity.db.RaceEvents.$Shape): pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape;
            static create(properties?: pulsarity.db.RaceEvents.$Properties): pulsarity.db.RaceEvents;

            /**
             * Encodes the specified RaceEvents message. Does not implicitly {@link pulsarity.db.RaceEvents.verify|verify} messages.
             * @param message RaceEvents message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.RaceEvents.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RaceEvents message, length delimited. Does not implicitly {@link pulsarity.db.RaceEvents.verify|verify} messages.
             * @param message RaceEvents message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.RaceEvents.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RaceEvents message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape} RaceEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape;

            /**
             * Decodes a RaceEvents message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape} RaceEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.RaceEvents & pulsarity.db.RaceEvents.$Shape;

            /**
             * Verifies a RaceEvents message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RaceEvents message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RaceEvents
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.RaceEvents;

            /**
             * Creates a plain object from a RaceEvents message. Also converts values to other types if specified.
             * @param message RaceEvents
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.RaceEvents, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RaceEvents to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RaceEvents
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RaceEvents {

            /** Properties of a RaceEvents. */
            interface $Properties {

                /** RaceEvents events */
                events?: (pulsarity.db.RaceEvent.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RaceEvents. */
            type $Shape = pulsarity.db.RaceEvents.$Properties;
        }

        /**
         * Properties of a RaceClass.
         * @deprecated Use pulsarity.db.RaceClass.$Properties instead.
         */
        interface IRaceClass extends pulsarity.db.RaceClass.$Properties {
        }

        /** Represents a RaceClass. */
        class RaceClass {

            /**
             * Constructs a new RaceClass.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.RaceClass.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RaceClass id. */
            id: number;

            /** RaceClass name. */
            name: string;

            /** RaceClass attributes. */
            attributes: pulsarity.db.Attribute.$Properties[];

            /**
             * Creates a new RaceClass instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RaceClass instance
             */
            static create(properties: pulsarity.db.RaceClass.$Shape): pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape;
            static create(properties?: pulsarity.db.RaceClass.$Properties): pulsarity.db.RaceClass;

            /**
             * Encodes the specified RaceClass message. Does not implicitly {@link pulsarity.db.RaceClass.verify|verify} messages.
             * @param message RaceClass message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.RaceClass.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RaceClass message, length delimited. Does not implicitly {@link pulsarity.db.RaceClass.verify|verify} messages.
             * @param message RaceClass message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.RaceClass.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RaceClass message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape} RaceClass
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape;

            /**
             * Decodes a RaceClass message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape} RaceClass
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.RaceClass & pulsarity.db.RaceClass.$Shape;

            /**
             * Verifies a RaceClass message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RaceClass message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RaceClass
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.RaceClass;

            /**
             * Creates a plain object from a RaceClass message. Also converts values to other types if specified.
             * @param message RaceClass
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.RaceClass, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RaceClass to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RaceClass
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RaceClass {

            /** Properties of a RaceClass. */
            interface $Properties {

                /** RaceClass id */
                id?: (number|null);

                /** RaceClass name */
                name?: (string|null);

                /** RaceClass attributes */
                attributes?: (pulsarity.db.Attribute.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RaceClass. */
            type $Shape = pulsarity.db.RaceClass.$Properties;
        }

        /**
         * Properties of a RaceClasses.
         * @deprecated Use pulsarity.db.RaceClasses.$Properties instead.
         */
        interface IRaceClasses extends pulsarity.db.RaceClasses.$Properties {
        }

        /** Represents a RaceClasses. */
        class RaceClasses {

            /**
             * Constructs a new RaceClasses.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.RaceClasses.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RaceClasses raceclasses. */
            raceclasses: pulsarity.db.RaceClass.$Properties[];

            /**
             * Creates a new RaceClasses instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RaceClasses instance
             */
            static create(properties: pulsarity.db.RaceClasses.$Shape): pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape;
            static create(properties?: pulsarity.db.RaceClasses.$Properties): pulsarity.db.RaceClasses;

            /**
             * Encodes the specified RaceClasses message. Does not implicitly {@link pulsarity.db.RaceClasses.verify|verify} messages.
             * @param message RaceClasses message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.RaceClasses.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RaceClasses message, length delimited. Does not implicitly {@link pulsarity.db.RaceClasses.verify|verify} messages.
             * @param message RaceClasses message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.RaceClasses.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RaceClasses message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape} RaceClasses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape;

            /**
             * Decodes a RaceClasses message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape} RaceClasses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.RaceClasses & pulsarity.db.RaceClasses.$Shape;

            /**
             * Verifies a RaceClasses message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RaceClasses message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RaceClasses
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.RaceClasses;

            /**
             * Creates a plain object from a RaceClasses message. Also converts values to other types if specified.
             * @param message RaceClasses
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.RaceClasses, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RaceClasses to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RaceClasses
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RaceClasses {

            /** Properties of a RaceClasses. */
            interface $Properties {

                /** RaceClasses raceclasses */
                raceclasses?: (pulsarity.db.RaceClass.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RaceClasses. */
            type $Shape = pulsarity.db.RaceClasses.$Properties;
        }

        /**
         * Properties of a Round.
         * @deprecated Use pulsarity.db.Round.$Properties instead.
         */
        interface IRound extends pulsarity.db.Round.$Properties {
        }

        /** Represents a Round. */
        class Round {

            /**
             * Constructs a new Round.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.Round.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Round id. */
            id: number;

            /** Round roundNum. */
            roundNum: number;

            /** Round attributes. */
            attributes: pulsarity.db.Attribute.$Properties[];

            /**
             * Creates a new Round instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Round instance
             */
            static create(properties: pulsarity.db.Round.$Shape): pulsarity.db.Round & pulsarity.db.Round.$Shape;
            static create(properties?: pulsarity.db.Round.$Properties): pulsarity.db.Round;

            /**
             * Encodes the specified Round message. Does not implicitly {@link pulsarity.db.Round.verify|verify} messages.
             * @param message Round message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.Round.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Round message, length delimited. Does not implicitly {@link pulsarity.db.Round.verify|verify} messages.
             * @param message Round message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.Round.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Round message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.Round & pulsarity.db.Round.$Shape} Round
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.Round & pulsarity.db.Round.$Shape;

            /**
             * Decodes a Round message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.Round & pulsarity.db.Round.$Shape} Round
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.Round & pulsarity.db.Round.$Shape;

            /**
             * Verifies a Round message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Round message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Round
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.Round;

            /**
             * Creates a plain object from a Round message. Also converts values to other types if specified.
             * @param message Round
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.Round, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Round to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Round
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Round {

            /** Properties of a Round. */
            interface $Properties {

                /** Round id */
                id?: (number|null);

                /** Round roundNum */
                roundNum?: (number|null);

                /** Round attributes */
                attributes?: (pulsarity.db.Attribute.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Round. */
            type $Shape = pulsarity.db.Round.$Properties;
        }

        /**
         * Properties of a Rounds.
         * @deprecated Use pulsarity.db.Rounds.$Properties instead.
         */
        interface IRounds extends pulsarity.db.Rounds.$Properties {
        }

        /** Represents a Rounds. */
        class Rounds {

            /**
             * Constructs a new Rounds.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.Rounds.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Rounds rounds. */
            rounds: pulsarity.db.Round.$Properties[];

            /**
             * Creates a new Rounds instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Rounds instance
             */
            static create(properties: pulsarity.db.Rounds.$Shape): pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape;
            static create(properties?: pulsarity.db.Rounds.$Properties): pulsarity.db.Rounds;

            /**
             * Encodes the specified Rounds message. Does not implicitly {@link pulsarity.db.Rounds.verify|verify} messages.
             * @param message Rounds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.Rounds.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Rounds message, length delimited. Does not implicitly {@link pulsarity.db.Rounds.verify|verify} messages.
             * @param message Rounds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.Rounds.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Rounds message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape} Rounds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape;

            /**
             * Decodes a Rounds message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape} Rounds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.Rounds & pulsarity.db.Rounds.$Shape;

            /**
             * Verifies a Rounds message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Rounds message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Rounds
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.Rounds;

            /**
             * Creates a plain object from a Rounds message. Also converts values to other types if specified.
             * @param message Rounds
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.Rounds, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Rounds to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Rounds
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Rounds {

            /** Properties of a Rounds. */
            interface $Properties {

                /** Rounds rounds */
                rounds?: (pulsarity.db.Round.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Rounds. */
            type $Shape = pulsarity.db.Rounds.$Properties;
        }

        /**
         * Properties of a Heat.
         * @deprecated Use pulsarity.db.Heat.$Properties instead.
         */
        interface IHeat extends pulsarity.db.Heat.$Properties {
        }

        /** Represents a Heat. */
        class Heat {

            /**
             * Constructs a new Heat.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.Heat.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Heat id. */
            id: number;

            /** Heat heatNum. */
            heatNum: number;

            /** Heat attributes. */
            attributes: pulsarity.db.Attribute.$Properties[];

            /**
             * Creates a new Heat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Heat instance
             */
            static create(properties: pulsarity.db.Heat.$Shape): pulsarity.db.Heat & pulsarity.db.Heat.$Shape;
            static create(properties?: pulsarity.db.Heat.$Properties): pulsarity.db.Heat;

            /**
             * Encodes the specified Heat message. Does not implicitly {@link pulsarity.db.Heat.verify|verify} messages.
             * @param message Heat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.Heat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Heat message, length delimited. Does not implicitly {@link pulsarity.db.Heat.verify|verify} messages.
             * @param message Heat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.Heat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Heat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.Heat & pulsarity.db.Heat.$Shape} Heat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.Heat & pulsarity.db.Heat.$Shape;

            /**
             * Decodes a Heat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.Heat & pulsarity.db.Heat.$Shape} Heat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.Heat & pulsarity.db.Heat.$Shape;

            /**
             * Verifies a Heat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Heat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Heat
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.Heat;

            /**
             * Creates a plain object from a Heat message. Also converts values to other types if specified.
             * @param message Heat
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.Heat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Heat to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Heat
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Heat {

            /** Properties of a Heat. */
            interface $Properties {

                /** Heat id */
                id?: (number|null);

                /** Heat heatNum */
                heatNum?: (number|null);

                /** Heat attributes */
                attributes?: (pulsarity.db.Attribute.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Heat. */
            type $Shape = pulsarity.db.Heat.$Properties;
        }

        /**
         * Properties of a Heats.
         * @deprecated Use pulsarity.db.Heats.$Properties instead.
         */
        interface IHeats extends pulsarity.db.Heats.$Properties {
        }

        /** Represents a Heats. */
        class Heats {

            /**
             * Constructs a new Heats.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.Heats.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Heats heats. */
            heats: pulsarity.db.Heat.$Properties[];

            /**
             * Creates a new Heats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Heats instance
             */
            static create(properties: pulsarity.db.Heats.$Shape): pulsarity.db.Heats & pulsarity.db.Heats.$Shape;
            static create(properties?: pulsarity.db.Heats.$Properties): pulsarity.db.Heats;

            /**
             * Encodes the specified Heats message. Does not implicitly {@link pulsarity.db.Heats.verify|verify} messages.
             * @param message Heats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.Heats.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Heats message, length delimited. Does not implicitly {@link pulsarity.db.Heats.verify|verify} messages.
             * @param message Heats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.Heats.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Heats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.Heats & pulsarity.db.Heats.$Shape} Heats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.Heats & pulsarity.db.Heats.$Shape;

            /**
             * Decodes a Heats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.Heats & pulsarity.db.Heats.$Shape} Heats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.Heats & pulsarity.db.Heats.$Shape;

            /**
             * Verifies a Heats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Heats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Heats
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.Heats;

            /**
             * Creates a plain object from a Heats message. Also converts values to other types if specified.
             * @param message Heats
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.Heats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Heats to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Heats
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Heats {

            /** Properties of a Heats. */
            interface $Properties {

                /** Heats heats */
                heats?: (pulsarity.db.Heat.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Heats. */
            type $Shape = pulsarity.db.Heats.$Properties;
        }

        /**
         * Properties of a SignalRecord.
         * @deprecated Use pulsarity.db.SignalRecord.$Properties instead.
         */
        interface ISignalRecord extends pulsarity.db.SignalRecord.$Properties {
        }

        /** Represents a SignalRecord. */
        class SignalRecord {

            /**
             * Constructs a new SignalRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.SignalRecord.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** SignalRecord timedelta. */
            timedelta: number;

            /** SignalRecord value. */
            value: number;

            /**
             * Creates a new SignalRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignalRecord instance
             */
            static create(properties: pulsarity.db.SignalRecord.$Shape): pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape;
            static create(properties?: pulsarity.db.SignalRecord.$Properties): pulsarity.db.SignalRecord;

            /**
             * Encodes the specified SignalRecord message. Does not implicitly {@link pulsarity.db.SignalRecord.verify|verify} messages.
             * @param message SignalRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.SignalRecord.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignalRecord message, length delimited. Does not implicitly {@link pulsarity.db.SignalRecord.verify|verify} messages.
             * @param message SignalRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.SignalRecord.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignalRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape} SignalRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape;

            /**
             * Decodes a SignalRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape} SignalRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.SignalRecord & pulsarity.db.SignalRecord.$Shape;

            /**
             * Verifies a SignalRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignalRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignalRecord
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.SignalRecord;

            /**
             * Creates a plain object from a SignalRecord message. Also converts values to other types if specified.
             * @param message SignalRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.SignalRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignalRecord to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SignalRecord
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SignalRecord {

            /** Properties of a SignalRecord. */
            interface $Properties {

                /** SignalRecord timedelta */
                timedelta?: (number|null);

                /** SignalRecord value */
                value?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SignalRecord. */
            type $Shape = pulsarity.db.SignalRecord.$Properties;
        }

        /**
         * Properties of a SignalHistory.
         * @deprecated Use pulsarity.db.SignalHistory.$Properties instead.
         */
        interface ISignalHistory extends pulsarity.db.SignalHistory.$Properties {
        }

        /** Represents a SignalHistory. */
        class SignalHistory {

            /**
             * Constructs a new SignalHistory.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.db.SignalHistory.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** SignalHistory records. */
            records: pulsarity.db.SignalRecord.$Properties[];

            /**
             * Creates a new SignalHistory instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignalHistory instance
             */
            static create(properties: pulsarity.db.SignalHistory.$Shape): pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape;
            static create(properties?: pulsarity.db.SignalHistory.$Properties): pulsarity.db.SignalHistory;

            /**
             * Encodes the specified SignalHistory message. Does not implicitly {@link pulsarity.db.SignalHistory.verify|verify} messages.
             * @param message SignalHistory message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.db.SignalHistory.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignalHistory message, length delimited. Does not implicitly {@link pulsarity.db.SignalHistory.verify|verify} messages.
             * @param message SignalHistory message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.db.SignalHistory.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignalHistory message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape} SignalHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape;

            /**
             * Decodes a SignalHistory message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape} SignalHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.db.SignalHistory & pulsarity.db.SignalHistory.$Shape;

            /**
             * Verifies a SignalHistory message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignalHistory message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignalHistory
             */
            static fromObject(object: { [k: string]: any }): pulsarity.db.SignalHistory;

            /**
             * Creates a plain object from a SignalHistory message. Also converts values to other types if specified.
             * @param message SignalHistory
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.db.SignalHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignalHistory to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SignalHistory
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SignalHistory {

            /** Properties of a SignalHistory. */
            interface $Properties {

                /** SignalHistory records */
                records?: (pulsarity.db.SignalRecord.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SignalHistory. */
            type $Shape = pulsarity.db.SignalHistory.$Properties;
        }
    }

    /** Namespace http. */
    namespace http {

        /**
         * Properties of a UserInfo.
         * @deprecated Use pulsarity.http.UserInfo.$Properties instead.
         */
        interface IUserInfo extends pulsarity.http.UserInfo.$Properties {
        }

        /** Represents a UserInfo. */
        class UserInfo {

            /**
             * Constructs a new UserInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.http.UserInfo.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** UserInfo authenticated. */
            authenticated: boolean;

            /** UserInfo authId. */
            authId: string;

            /** UserInfo username. */
            username: string;

            /** UserInfo dispayName. */
            dispayName: string;

            /** UserInfo permissions. */
            permissions: string[];

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserInfo instance
             */
            static create(properties: pulsarity.http.UserInfo.$Shape): pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape;
            static create(properties?: pulsarity.http.UserInfo.$Properties): pulsarity.http.UserInfo;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link pulsarity.http.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.http.UserInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link pulsarity.http.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.http.UserInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape;

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.http.UserInfo & pulsarity.http.UserInfo.$Shape;

            /**
             * Verifies a UserInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserInfo
             */
            static fromObject(object: { [k: string]: any }): pulsarity.http.UserInfo;

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @param message UserInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.http.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UserInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UserInfo {

            /** Properties of a UserInfo. */
            interface $Properties {

                /** UserInfo authenticated */
                authenticated?: (boolean|null);

                /** UserInfo authId */
                authId?: (string|null);

                /** UserInfo username */
                username?: (string|null);

                /** UserInfo dispayName */
                dispayName?: (string|null);

                /** UserInfo permissions */
                permissions?: (string[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UserInfo. */
            type $Shape = pulsarity.http.UserInfo.$Properties;
        }

        /**
         * Properties of an AuthenticatedResponse.
         * @deprecated Use pulsarity.http.AuthenticatedResponse.$Properties instead.
         */
        interface IAuthenticatedResponse extends pulsarity.http.AuthenticatedResponse.$Properties {
        }

        /** Represents an AuthenticatedResponse. */
        class AuthenticatedResponse {

            /**
             * Constructs a new AuthenticatedResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.http.AuthenticatedResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** AuthenticatedResponse status. */
            status: boolean;

            /** AuthenticatedResponse userinfo. */
            userinfo?: (pulsarity.http.UserInfo.$Properties|null);

            /**
             * Creates a new AuthenticatedResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthenticatedResponse instance
             */
            static create(properties: pulsarity.http.AuthenticatedResponse.$Shape): pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape;
            static create(properties?: pulsarity.http.AuthenticatedResponse.$Properties): pulsarity.http.AuthenticatedResponse;

            /**
             * Encodes the specified AuthenticatedResponse message. Does not implicitly {@link pulsarity.http.AuthenticatedResponse.verify|verify} messages.
             * @param message AuthenticatedResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.http.AuthenticatedResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthenticatedResponse message, length delimited. Does not implicitly {@link pulsarity.http.AuthenticatedResponse.verify|verify} messages.
             * @param message AuthenticatedResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.http.AuthenticatedResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthenticatedResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape} AuthenticatedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape;

            /**
             * Decodes an AuthenticatedResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape} AuthenticatedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.http.AuthenticatedResponse & pulsarity.http.AuthenticatedResponse.$Shape;

            /**
             * Verifies an AuthenticatedResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthenticatedResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthenticatedResponse
             */
            static fromObject(object: { [k: string]: any }): pulsarity.http.AuthenticatedResponse;

            /**
             * Creates a plain object from an AuthenticatedResponse message. Also converts values to other types if specified.
             * @param message AuthenticatedResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.http.AuthenticatedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthenticatedResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AuthenticatedResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AuthenticatedResponse {

            /** Properties of an AuthenticatedResponse. */
            interface $Properties {

                /** AuthenticatedResponse status */
                status?: (boolean|null);

                /** AuthenticatedResponse userinfo */
                userinfo?: (pulsarity.http.UserInfo.$Properties|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AuthenticatedResponse. */
            type $Shape = pulsarity.http.AuthenticatedResponse.$Properties;
        }

        /**
         * Properties of a LoginRequest.
         * @deprecated Use pulsarity.http.LoginRequest.$Properties instead.
         */
        interface ILoginRequest extends pulsarity.http.LoginRequest.$Properties {
        }

        /** Represents a LoginRequest. */
        class LoginRequest {

            /**
             * Constructs a new LoginRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.http.LoginRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** LoginRequest username. */
            username: string;

            /** LoginRequest password. */
            password: string;

            /**
             * Creates a new LoginRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginRequest instance
             */
            static create(properties: pulsarity.http.LoginRequest.$Shape): pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape;
            static create(properties?: pulsarity.http.LoginRequest.$Properties): pulsarity.http.LoginRequest;

            /**
             * Encodes the specified LoginRequest message. Does not implicitly {@link pulsarity.http.LoginRequest.verify|verify} messages.
             * @param message LoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.http.LoginRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link pulsarity.http.LoginRequest.verify|verify} messages.
             * @param message LoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.http.LoginRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape;

            /**
             * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.http.LoginRequest & pulsarity.http.LoginRequest.$Shape;

            /**
             * Verifies a LoginRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginRequest
             */
            static fromObject(object: { [k: string]: any }): pulsarity.http.LoginRequest;

            /**
             * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
             * @param message LoginRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.http.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LoginRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LoginRequest {

            /** Properties of a LoginRequest. */
            interface $Properties {

                /** LoginRequest username */
                username?: (string|null);

                /** LoginRequest password */
                password?: (string|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LoginRequest. */
            type $Shape = pulsarity.http.LoginRequest.$Properties;
        }

        /**
         * Properties of a LoginResponse.
         * @deprecated Use pulsarity.http.LoginResponse.$Properties instead.
         */
        interface ILoginResponse extends pulsarity.http.LoginResponse.$Properties {
        }

        /** Represents a LoginResponse. */
        class LoginResponse {

            /**
             * Constructs a new LoginResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.http.LoginResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** LoginResponse passwordResetRequired. */
            passwordResetRequired: boolean;

            /** LoginResponse userinfo. */
            userinfo?: (pulsarity.http.UserInfo.$Properties|null);

            /**
             * Creates a new LoginResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginResponse instance
             */
            static create(properties: pulsarity.http.LoginResponse.$Shape): pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape;
            static create(properties?: pulsarity.http.LoginResponse.$Properties): pulsarity.http.LoginResponse;

            /**
             * Encodes the specified LoginResponse message. Does not implicitly {@link pulsarity.http.LoginResponse.verify|verify} messages.
             * @param message LoginResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.http.LoginResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link pulsarity.http.LoginResponse.verify|verify} messages.
             * @param message LoginResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.http.LoginResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape;

            /**
             * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.http.LoginResponse & pulsarity.http.LoginResponse.$Shape;

            /**
             * Verifies a LoginResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginResponse
             */
            static fromObject(object: { [k: string]: any }): pulsarity.http.LoginResponse;

            /**
             * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
             * @param message LoginResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.http.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LoginResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LoginResponse {

            /** Properties of a LoginResponse. */
            interface $Properties {

                /** LoginResponse passwordResetRequired */
                passwordResetRequired?: (boolean|null);

                /** LoginResponse userinfo */
                userinfo?: (pulsarity.http.UserInfo.$Properties|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LoginResponse. */
            type $Shape = pulsarity.http.LoginResponse.$Properties;
        }

        /**
         * Properties of a ResetPasswordRequest.
         * @deprecated Use pulsarity.http.ResetPasswordRequest.$Properties instead.
         */
        interface IResetPasswordRequest extends pulsarity.http.ResetPasswordRequest.$Properties {
        }

        /** Represents a ResetPasswordRequest. */
        class ResetPasswordRequest {

            /**
             * Constructs a new ResetPasswordRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.http.ResetPasswordRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** ResetPasswordRequest oldPassword. */
            oldPassword: string;

            /** ResetPasswordRequest newPassword. */
            newPassword: string;

            /**
             * Creates a new ResetPasswordRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResetPasswordRequest instance
             */
            static create(properties: pulsarity.http.ResetPasswordRequest.$Shape): pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape;
            static create(properties?: pulsarity.http.ResetPasswordRequest.$Properties): pulsarity.http.ResetPasswordRequest;

            /**
             * Encodes the specified ResetPasswordRequest message. Does not implicitly {@link pulsarity.http.ResetPasswordRequest.verify|verify} messages.
             * @param message ResetPasswordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.http.ResetPasswordRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResetPasswordRequest message, length delimited. Does not implicitly {@link pulsarity.http.ResetPasswordRequest.verify|verify} messages.
             * @param message ResetPasswordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.http.ResetPasswordRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResetPasswordRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape} ResetPasswordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape;

            /**
             * Decodes a ResetPasswordRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape} ResetPasswordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.http.ResetPasswordRequest & pulsarity.http.ResetPasswordRequest.$Shape;

            /**
             * Verifies a ResetPasswordRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResetPasswordRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResetPasswordRequest
             */
            static fromObject(object: { [k: string]: any }): pulsarity.http.ResetPasswordRequest;

            /**
             * Creates a plain object from a ResetPasswordRequest message. Also converts values to other types if specified.
             * @param message ResetPasswordRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.http.ResetPasswordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResetPasswordRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ResetPasswordRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ResetPasswordRequest {

            /** Properties of a ResetPasswordRequest. */
            interface $Properties {

                /** ResetPasswordRequest oldPassword */
                oldPassword?: (string|null);

                /** ResetPasswordRequest newPassword */
                newPassword?: (string|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ResetPasswordRequest. */
            type $Shape = pulsarity.http.ResetPasswordRequest.$Properties;
        }

        /**
         * Properties of a ServerData.
         * @deprecated Use pulsarity.http.ServerData.$Properties instead.
         */
        interface IServerData extends pulsarity.http.ServerData.$Properties {
        }

        /** Represents a ServerData. */
        class ServerData {

            /**
             * Constructs a new ServerData.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.http.ServerData.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** ServerData version. */
            version: string;

            /** ServerData serverName. */
            serverName: string;

            /** ServerData languageVersion. */
            languageVersion: string;

            /** ServerData languagePacks. */
            languagePacks: string[];

            /**
             * Creates a new ServerData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerData instance
             */
            static create(properties: pulsarity.http.ServerData.$Shape): pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape;
            static create(properties?: pulsarity.http.ServerData.$Properties): pulsarity.http.ServerData;

            /**
             * Encodes the specified ServerData message. Does not implicitly {@link pulsarity.http.ServerData.verify|verify} messages.
             * @param message ServerData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.http.ServerData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerData message, length delimited. Does not implicitly {@link pulsarity.http.ServerData.verify|verify} messages.
             * @param message ServerData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.http.ServerData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape} ServerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape;

            /**
             * Decodes a ServerData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape} ServerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.http.ServerData & pulsarity.http.ServerData.$Shape;

            /**
             * Verifies a ServerData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerData
             */
            static fromObject(object: { [k: string]: any }): pulsarity.http.ServerData;

            /**
             * Creates a plain object from a ServerData message. Also converts values to other types if specified.
             * @param message ServerData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.http.ServerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ServerData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ServerData {

            /** Properties of a ServerData. */
            interface $Properties {

                /** ServerData version */
                version?: (string|null);

                /** ServerData serverName */
                serverName?: (string|null);

                /** ServerData languageVersion */
                languageVersion?: (string|null);

                /** ServerData languagePacks */
                languagePacks?: (string[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ServerData. */
            type $Shape = pulsarity.http.ServerData.$Properties;
        }

        /**
         * Properties of a LocalizationData.
         * @deprecated Use pulsarity.http.LocalizationData.$Properties instead.
         */
        interface ILocalizationData extends pulsarity.http.LocalizationData.$Properties {
        }

        /** Represents a LocalizationData. */
        class LocalizationData {

            /**
             * Constructs a new LocalizationData.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.http.LocalizationData.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** LocalizationData messages. */
            messages: { [k: string]: string };

            /** LocalizationData pluralization. */
            pluralization: { [k: string]: string };

            /**
             * Creates a new LocalizationData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LocalizationData instance
             */
            static create(properties: pulsarity.http.LocalizationData.$Shape): pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape;
            static create(properties?: pulsarity.http.LocalizationData.$Properties): pulsarity.http.LocalizationData;

            /**
             * Encodes the specified LocalizationData message. Does not implicitly {@link pulsarity.http.LocalizationData.verify|verify} messages.
             * @param message LocalizationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.http.LocalizationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LocalizationData message, length delimited. Does not implicitly {@link pulsarity.http.LocalizationData.verify|verify} messages.
             * @param message LocalizationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.http.LocalizationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LocalizationData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape} LocalizationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape;

            /**
             * Decodes a LocalizationData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape} LocalizationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.http.LocalizationData & pulsarity.http.LocalizationData.$Shape;

            /**
             * Verifies a LocalizationData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LocalizationData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LocalizationData
             */
            static fromObject(object: { [k: string]: any }): pulsarity.http.LocalizationData;

            /**
             * Creates a plain object from a LocalizationData message. Also converts values to other types if specified.
             * @param message LocalizationData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.http.LocalizationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LocalizationData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LocalizationData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LocalizationData {

            /** Properties of a LocalizationData. */
            interface $Properties {

                /** LocalizationData messages */
                messages?: ({ [k: string]: string }|null);

                /** LocalizationData pluralization */
                pluralization?: ({ [k: string]: string }|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LocalizationData. */
            type $Shape = pulsarity.http.LocalizationData.$Properties;
        }
    }

    /** Namespace ws. */
    namespace ws {

        /** EventID enum. */
        enum EventID {

            /** EVENT_UNSPECIFIED value */
            EVENT_UNSPECIFIED = 0,

            /** EVENT_HEARTBEAT value */
            EVENT_HEARTBEAT = 1,

            /** EVENT_PERMISSIONS_UPDATE value */
            EVENT_PERMISSIONS_UPDATE = 2,

            /** EVENT_STARTUP value */
            EVENT_STARTUP = 3,

            /** EVENT_SHUTDOWN value */
            EVENT_SHUTDOWN = 4,

            /** EVENT_RESTART value */
            EVENT_RESTART = 5,

            /** EVENT_RACE_SCHEDULE value */
            EVENT_RACE_SCHEDULE = 32,

            /** EVENT_RACE_STAGE value */
            EVENT_RACE_STAGE = 33,

            /** EVENT_RACE_START value */
            EVENT_RACE_START = 34,

            /** EVENT_RACE_FINISH value */
            EVENT_RACE_FINISH = 35,

            /** EVENT_RACE_STOP value */
            EVENT_RACE_STOP = 36,

            /** EVENT_RACE_PAUSE value */
            EVENT_RACE_PAUSE = 37,

            /** EVENT_RACE_RESUME value */
            EVENT_RACE_RESUME = 38,

            /** EVENT_PILOT_ADD value */
            EVENT_PILOT_ADD = 64,

            /** EVENT_PILOT_ALTER value */
            EVENT_PILOT_ALTER = 65,

            /** EVENT_PILOT_DELETE value */
            EVENT_PILOT_DELETE = 66
        }

        /**
         * Properties of a PilotAddData.
         * @deprecated Use pulsarity.ws.PilotAddData.$Properties instead.
         */
        interface IPilotAddData extends pulsarity.ws.PilotAddData.$Properties {
        }

        /** Represents a PilotAddData. */
        class PilotAddData {

            /**
             * Constructs a new PilotAddData.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.ws.PilotAddData.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** PilotAddData pilotId. */
            pilotId: number;

            /**
             * Creates a new PilotAddData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PilotAddData instance
             */
            static create(properties: pulsarity.ws.PilotAddData.$Shape): pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape;
            static create(properties?: pulsarity.ws.PilotAddData.$Properties): pulsarity.ws.PilotAddData;

            /**
             * Encodes the specified PilotAddData message. Does not implicitly {@link pulsarity.ws.PilotAddData.verify|verify} messages.
             * @param message PilotAddData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.ws.PilotAddData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PilotAddData message, length delimited. Does not implicitly {@link pulsarity.ws.PilotAddData.verify|verify} messages.
             * @param message PilotAddData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.ws.PilotAddData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PilotAddData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape} PilotAddData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape;

            /**
             * Decodes a PilotAddData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape} PilotAddData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.ws.PilotAddData & pulsarity.ws.PilotAddData.$Shape;

            /**
             * Verifies a PilotAddData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PilotAddData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PilotAddData
             */
            static fromObject(object: { [k: string]: any }): pulsarity.ws.PilotAddData;

            /**
             * Creates a plain object from a PilotAddData message. Also converts values to other types if specified.
             * @param message PilotAddData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.ws.PilotAddData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PilotAddData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PilotAddData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PilotAddData {

            /** Properties of a PilotAddData. */
            interface $Properties {

                /** PilotAddData pilotId */
                pilotId?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PilotAddData. */
            type $Shape = pulsarity.ws.PilotAddData.$Properties;
        }

        /**
         * Properties of a PilotAlterData.
         * @deprecated Use pulsarity.ws.PilotAlterData.$Properties instead.
         */
        interface IPilotAlterData extends pulsarity.ws.PilotAlterData.$Properties {
        }

        /** Represents a PilotAlterData. */
        class PilotAlterData {

            /**
             * Constructs a new PilotAlterData.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.ws.PilotAlterData.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** PilotAlterData pilotId. */
            pilotId: number;

            /**
             * Creates a new PilotAlterData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PilotAlterData instance
             */
            static create(properties: pulsarity.ws.PilotAlterData.$Shape): pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape;
            static create(properties?: pulsarity.ws.PilotAlterData.$Properties): pulsarity.ws.PilotAlterData;

            /**
             * Encodes the specified PilotAlterData message. Does not implicitly {@link pulsarity.ws.PilotAlterData.verify|verify} messages.
             * @param message PilotAlterData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.ws.PilotAlterData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PilotAlterData message, length delimited. Does not implicitly {@link pulsarity.ws.PilotAlterData.verify|verify} messages.
             * @param message PilotAlterData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.ws.PilotAlterData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PilotAlterData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape} PilotAlterData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape;

            /**
             * Decodes a PilotAlterData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape} PilotAlterData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.ws.PilotAlterData & pulsarity.ws.PilotAlterData.$Shape;

            /**
             * Verifies a PilotAlterData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PilotAlterData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PilotAlterData
             */
            static fromObject(object: { [k: string]: any }): pulsarity.ws.PilotAlterData;

            /**
             * Creates a plain object from a PilotAlterData message. Also converts values to other types if specified.
             * @param message PilotAlterData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.ws.PilotAlterData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PilotAlterData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PilotAlterData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PilotAlterData {

            /** Properties of a PilotAlterData. */
            interface $Properties {

                /** PilotAlterData pilotId */
                pilotId?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PilotAlterData. */
            type $Shape = pulsarity.ws.PilotAlterData.$Properties;
        }

        /**
         * Properties of a PilotDeleteData.
         * @deprecated Use pulsarity.ws.PilotDeleteData.$Properties instead.
         */
        interface IPilotDeleteData extends pulsarity.ws.PilotDeleteData.$Properties {
        }

        /** Represents a PilotDeleteData. */
        class PilotDeleteData {

            /**
             * Constructs a new PilotDeleteData.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.ws.PilotDeleteData.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** PilotDeleteData pilotId. */
            pilotId: number;

            /**
             * Creates a new PilotDeleteData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PilotDeleteData instance
             */
            static create(properties: pulsarity.ws.PilotDeleteData.$Shape): pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape;
            static create(properties?: pulsarity.ws.PilotDeleteData.$Properties): pulsarity.ws.PilotDeleteData;

            /**
             * Encodes the specified PilotDeleteData message. Does not implicitly {@link pulsarity.ws.PilotDeleteData.verify|verify} messages.
             * @param message PilotDeleteData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.ws.PilotDeleteData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PilotDeleteData message, length delimited. Does not implicitly {@link pulsarity.ws.PilotDeleteData.verify|verify} messages.
             * @param message PilotDeleteData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.ws.PilotDeleteData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PilotDeleteData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape} PilotDeleteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape;

            /**
             * Decodes a PilotDeleteData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape} PilotDeleteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.ws.PilotDeleteData & pulsarity.ws.PilotDeleteData.$Shape;

            /**
             * Verifies a PilotDeleteData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PilotDeleteData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PilotDeleteData
             */
            static fromObject(object: { [k: string]: any }): pulsarity.ws.PilotDeleteData;

            /**
             * Creates a plain object from a PilotDeleteData message. Also converts values to other types if specified.
             * @param message PilotDeleteData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.ws.PilotDeleteData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PilotDeleteData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PilotDeleteData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PilotDeleteData {

            /** Properties of a PilotDeleteData. */
            interface $Properties {

                /** PilotDeleteData pilotId */
                pilotId?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PilotDeleteData. */
            type $Shape = pulsarity.ws.PilotDeleteData.$Properties;
        }

        /**
         * Properties of a WebsocketEvent.
         * @deprecated Use pulsarity.ws.WebsocketEvent.$Properties instead.
         */
        interface IWebsocketEvent extends pulsarity.ws.WebsocketEvent.$Properties {
        }

        /** Represents a WebsocketEvent. */
        class WebsocketEvent {

            /**
             * Constructs a new WebsocketEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: pulsarity.ws.WebsocketEvent.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** WebsocketEvent uuid. */
            uuid: Uint8Array;

            /** WebsocketEvent eventId. */
            eventId: pulsarity.ws.EventID;

            /** WebsocketEvent pilotAdd. */
            pilotAdd?: (pulsarity.ws.PilotAddData.$Properties|null);

            /** WebsocketEvent pilotAlter. */
            pilotAlter?: (pulsarity.ws.PilotAlterData.$Properties|null);

            /** WebsocketEvent pilotDelete. */
            pilotDelete?: (pulsarity.ws.PilotDeleteData.$Properties|null);

            /** WebsocketEvent eventData. */
            eventData?: ("pilotAdd"|"pilotAlter"|"pilotDelete");

            /**
             * Creates a new WebsocketEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebsocketEvent instance
             */
            static create(properties: pulsarity.ws.WebsocketEvent.$Shape): pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape;
            static create(properties?: pulsarity.ws.WebsocketEvent.$Properties): pulsarity.ws.WebsocketEvent;

            /**
             * Encodes the specified WebsocketEvent message. Does not implicitly {@link pulsarity.ws.WebsocketEvent.verify|verify} messages.
             * @param message WebsocketEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: pulsarity.ws.WebsocketEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebsocketEvent message, length delimited. Does not implicitly {@link pulsarity.ws.WebsocketEvent.verify|verify} messages.
             * @param message WebsocketEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: pulsarity.ws.WebsocketEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebsocketEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape} WebsocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape;

            /**
             * Decodes a WebsocketEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape} WebsocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pulsarity.ws.WebsocketEvent & pulsarity.ws.WebsocketEvent.$Shape;

            /**
             * Verifies a WebsocketEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebsocketEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebsocketEvent
             */
            static fromObject(object: { [k: string]: any }): pulsarity.ws.WebsocketEvent;

            /**
             * Creates a plain object from a WebsocketEvent message. Also converts values to other types if specified.
             * @param message WebsocketEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: pulsarity.ws.WebsocketEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebsocketEvent to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WebsocketEvent
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WebsocketEvent {

            /** Properties of a WebsocketEvent. */
            interface $Properties {

                /** WebsocketEvent uuid */
                uuid?: (Uint8Array|null);

                /** WebsocketEvent eventId */
                eventId?: (pulsarity.ws.EventID|null);

                /** WebsocketEvent pilotAdd */
                pilotAdd?: (pulsarity.ws.PilotAddData.$Properties|null);

                /** WebsocketEvent pilotAlter */
                pilotAlter?: (pulsarity.ws.PilotAlterData.$Properties|null);

                /** WebsocketEvent pilotDelete */
                pilotDelete?: (pulsarity.ws.PilotDeleteData.$Properties|null);

                /** WebsocketEvent eventData */
                eventData?: ("pilotAdd"|"pilotAlter"|"pilotDelete");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a WebsocketEvent. */
            type $Shape = {
  uuid?: Uint8Array|null;
  eventId?: pulsarity.ws.EventID|null;
  pilotAdd?: pulsarity.ws.PilotAddData.$Shape|null;
  pilotAlter?: pulsarity.ws.PilotAlterData.$Shape|null;
  pilotDelete?: pulsarity.ws.PilotDeleteData.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ eventData?: undefined; pilotAdd?: null; pilotAlter?: null; pilotDelete?: null }|{ eventData?: "pilotAdd"; pilotAdd: pulsarity.ws.PilotAddData.$Shape; pilotAlter?: null; pilotDelete?: null }|{ eventData?: "pilotAlter"; pilotAdd?: null; pilotAlter: pulsarity.ws.PilotAlterData.$Shape; pilotDelete?: null }|{ eventData?: "pilotDelete"; pilotAdd?: null; pilotAlter?: null; pilotDelete: pulsarity.ws.PilotDeleteData.$Shape })
);
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of a Timestamp.
         * @deprecated Use google.protobuf.Timestamp.$Properties instead.
         */
        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.Timestamp.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Timestamp seconds. */
            seconds: (number|Long);

            /** Timestamp nanos. */
            nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            static create(properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
            static create(properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Timestamp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {

            /** Properties of a Timestamp. */
            interface $Properties {

                /** Timestamp seconds */
                seconds?: (number|Long|null);

                /** Timestamp nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Timestamp. */
            type $Shape = google.protobuf.Timestamp.$Properties;
        }
    }
}
