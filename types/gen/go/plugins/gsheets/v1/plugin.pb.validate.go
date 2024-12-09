// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: plugins/gsheets/v1/plugin.proto

package v1

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on SuperblocksMetadata with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *SuperblocksMetadata) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on SuperblocksMetadata with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// SuperblocksMetadataMultiError, or nil if none found.
func (m *SuperblocksMetadata) ValidateAll() error {
	return m.validate(true)
}

func (m *SuperblocksMetadata) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for PluginVersion

	if len(errors) > 0 {
		return SuperblocksMetadataMultiError(errors)
	}

	return nil
}

// SuperblocksMetadataMultiError is an error wrapping multiple validation
// errors returned by SuperblocksMetadata.ValidateAll() if the designated
// constraints aren't met.
type SuperblocksMetadataMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m SuperblocksMetadataMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m SuperblocksMetadataMultiError) AllErrors() []error { return m }

// SuperblocksMetadataValidationError is the validation error returned by
// SuperblocksMetadata.Validate if the designated constraints aren't met.
type SuperblocksMetadataValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SuperblocksMetadataValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SuperblocksMetadataValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SuperblocksMetadataValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SuperblocksMetadataValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SuperblocksMetadataValidationError) ErrorName() string {
	return "SuperblocksMetadataValidationError"
}

// Error satisfies the builtin error interface
func (e SuperblocksMetadataValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSuperblocksMetadata.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SuperblocksMetadataValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SuperblocksMetadataValidationError{}

// Validate checks the field values on Plugin with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Plugin) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Plugin with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in PluginMultiError, or nil if none found.
func (m *Plugin) ValidateAll() error {
	return m.validate(true)
}

func (m *Plugin) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for SpreadsheetId

	// no validation rules for ExtractFirstRowHeader

	// no validation rules for PreserveHeaderRow

	// no validation rules for IncludeHeaderRow

	if all {
		switch v := interface{}(m.GetSuperblocksMetadata()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PluginValidationError{
					field:  "SuperblocksMetadata",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PluginValidationError{
					field:  "SuperblocksMetadata",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetSuperblocksMetadata()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PluginValidationError{
				field:  "SuperblocksMetadata",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if m.SheetTitle != nil {
		// no validation rules for SheetTitle
	}

	if m.Range != nil {
		// no validation rules for Range
	}

	if m.RowNumber != nil {
		// no validation rules for RowNumber
	}

	if m.HeaderRowNumber != nil {
		// no validation rules for HeaderRowNumber
	}

	if m.Format != nil {
		// no validation rules for Format
	}

	if m.Data != nil {
		// no validation rules for Data
	}

	if m.Action != nil {
		// no validation rules for Action
	}

	if m.WriteToDestinationType != nil {
		// no validation rules for WriteToDestinationType
	}

	if m.Body != nil {
		// no validation rules for Body
	}

	if m.AddSheet != nil {

		if all {
			switch v := interface{}(m.GetAddSheet()).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, PluginValidationError{
						field:  "AddSheet",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, PluginValidationError{
						field:  "AddSheet",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(m.GetAddSheet()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return PluginValidationError{
					field:  "AddSheet",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return PluginMultiError(errors)
	}

	return nil
}

// PluginMultiError is an error wrapping multiple validation errors returned by
// Plugin.ValidateAll() if the designated constraints aren't met.
type PluginMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PluginMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PluginMultiError) AllErrors() []error { return m }

// PluginValidationError is the validation error returned by Plugin.Validate if
// the designated constraints aren't met.
type PluginValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PluginValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PluginValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PluginValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PluginValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PluginValidationError) ErrorName() string { return "PluginValidationError" }

// Error satisfies the builtin error interface
func (e PluginValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPlugin.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PluginValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PluginValidationError{}

// Validate checks the field values on Plugin_AddSheet with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *Plugin_AddSheet) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Plugin_AddSheet with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// Plugin_AddSheetMultiError, or nil if none found.
func (m *Plugin_AddSheet) ValidateAll() error {
	return m.validate(true)
}

func (m *Plugin_AddSheet) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for SheetTitle

	if m.RowCount != nil {
		// no validation rules for RowCount
	}

	if m.ColumnCount != nil {
		// no validation rules for ColumnCount
	}

	if len(errors) > 0 {
		return Plugin_AddSheetMultiError(errors)
	}

	return nil
}

// Plugin_AddSheetMultiError is an error wrapping multiple validation errors
// returned by Plugin_AddSheet.ValidateAll() if the designated constraints
// aren't met.
type Plugin_AddSheetMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m Plugin_AddSheetMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m Plugin_AddSheetMultiError) AllErrors() []error { return m }

// Plugin_AddSheetValidationError is the validation error returned by
// Plugin_AddSheet.Validate if the designated constraints aren't met.
type Plugin_AddSheetValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e Plugin_AddSheetValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e Plugin_AddSheetValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e Plugin_AddSheetValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e Plugin_AddSheetValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e Plugin_AddSheetValidationError) ErrorName() string { return "Plugin_AddSheetValidationError" }

// Error satisfies the builtin error interface
func (e Plugin_AddSheetValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPlugin_AddSheet.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = Plugin_AddSheetValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = Plugin_AddSheetValidationError{}
