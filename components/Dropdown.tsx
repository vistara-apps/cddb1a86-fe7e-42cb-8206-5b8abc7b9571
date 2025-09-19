'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownProps {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  variant?: 'singleSelect' | 'multiSelect';
  error?: string;
}

export function Dropdown({
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  variant = 'singleSelect',
  error,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMulti = variant === 'multiSelect';
  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  const handleSelect = (optionValue: string) => {
    if (isMulti) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter(v => v !== optionValue)
        : [...currentValues, optionValue];
      onChange(newValues);
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    if (isMulti) {
      return selectedValues.length === 1
        ? options.find(opt => opt.value === selectedValues[0])?.label
        : `${selectedValues.length} selected`;
    }
    return options.find(opt => opt.value === selectedValues[0])?.label;
  };

  return (
    <div className="relative space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default',
          'focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary',
          error && 'border-red-300 focus:border-red-500 focus:ring-red-500'
        )}
      >
        <span className="block truncate text-gray-900">
          {getDisplayText()}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);
            return (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={cn(
                  'cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100',
                  isSelected ? 'text-primary bg-blue-50' : 'text-gray-900'
                )}
              >
                <span className="block truncate font-normal">
                  {option.label}
                </span>
                {isSelected && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Check className="h-5 w-5 text-primary" />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
